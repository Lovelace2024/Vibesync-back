import { Request, Response } from "express";
import prisma from "../db/client.ts";

export const createTracks = async (req: Request, res: Response) => {
  const { name, artistId, url, thumbnail, genreId, albumId } = req.body;

  try {
    const newTrack = await prisma.tracks.create({
      data: {
        name,
        url,
        thumbnail,
        genreId,
      },
    });
    console.log("New Track:", newTrack);

    const artist = await prisma.artists.findUnique({
      where: { id: artistId },
    });

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    // Connect the new track to the artist's tracks
    const updatedArtist = await prisma.artists.update({
      where: { id: artistId },
      data: {
        tracks: {
          connect: { id: newTrack.id },
        },
      },
    });
    console.log("Updated Artist:", updatedArtist);
    // Ensure that the album exists
    const album = await prisma.albums.findUnique({
      where: { id: albumId },
    });

    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }

    // Connect the new track to the album's tracks
    await prisma.albums.update({
      where: { id: albumId },
      data: {
        tracks: {
          connect: { id: newTrack.id },
        },
      },
    });

    // Ensure that the genre exists
    const genre = await prisma.genre.findUnique({
      where: { id: genreId },
    });

    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    // Connect the new track to the genre's tracks
    await prisma.genre.update({
      where: { id: genreId },
      data: {
        tracks: {
          connect: { id: newTrack.id },
        },
      },
    });

    // Send the response with the created track
    res.status(201).send(newTrack);
  } catch (error) {
    console.error("Error creating track:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTracks = async (req: Request, res: Response) => {
  try {
    const allTracks = await prisma.tracks.findMany();
    if (!allTracks) {
      res.status(404).json({ message: "No tracks have been found" });
    }
    res.status(200).send(allTracks);
  } catch (error) {
    res.status(500).json(`Internal server error: ${error}`);
  }
};

export const getAllTracksByArtist = async (req: Request, res: Response) => {
  const artistId = req.params.artistId;

  try {
    // Verify that the artist exists
    const artist = await prisma.artists.findUnique({
      where: { id: artistId },
    });

    if (!artist) {
      return res
        .status(404)
        .json({ message: `Artist with id ${artistId} not found` });
    }

    const tracks = await prisma.tracks.findMany({
      where: {
        artist: {
          some: {
            id: artistId,
          },
        },
      },
    });

    if (tracks.length === 0) {
      res.status(404).json({ message: "No tracks have been found" });
    }

    res.status(200).json(tracks);
  } catch (error) {
    console.error("Error fetching tracks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTrack = async (req: Request, res: Response) => {
  const { trackId } = req.params;

  try {
    const selectedTrack = await prisma.tracks.findUnique({
      where: {
        id: trackId,
      },
    });
    if (!selectedTrack) {
      res.status(404).json({ message: "The track has not been found" });
    }
    res.status(200).send(selectedTrack);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTracks = async (req: Request, res: Response) => {
  const { name, artistId, url, thumbnail, genreId, albumId } = req.body;
  const { trackId } = req.params;

  try {
    const updatedTrack = await prisma.tracks.update({
      where: { id: trackId },
      data: {
        name,
        url,
        thumbnail,
        genreId,
      },
    });

    await prisma.artists.update({
      where: { id: artistId },
      data: {
        tracks: {
          connect: { id: trackId },
        },
      },
    });

    await prisma.albums.update({
      where: { id: albumId },
      data: {
        tracks: {
          connect: { id: trackId },
        },
      },
    });

    await prisma.genre.update({
      where: { id: genreId },
      data: {
        tracks: {
          connect: { id: trackId },
        },
      },
    });

    res.status(201).send(updatedTrack);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTracks = async (req: Request, res: Response) => {
  const { trackId } = req.params;

  try {
    const deletedTrack = await prisma.tracks.delete({
      where: {
        id: trackId,
      },
    });
    await prisma.artists.update({
      where: { id: deletedTrack.id },
      data: {
        tracks: {
          disconnect: { id: trackId },
        },
      },
    });

    await prisma.albums.update({
      where: { id: deletedTrack.id },
      data: {
        tracks: {
          disconnect: { id: trackId },
        },
      },
    });

    await prisma.genre.update({
      where: { id: deletedTrack.genreId },
      data: {
        tracks: {
          disconnect: { id: trackId },
        },
      },
    });
    res.status(201).json({ message: "Track deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
