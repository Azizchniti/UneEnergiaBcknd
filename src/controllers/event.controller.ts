import { Request, Response } from 'express';
import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from '../services/event.service';

export const getAllEventsController = async (_req: Request, res: Response) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createEventController = async (req: Request, res: Response) => {
  try {
    const event = await createEvent(req.body);
    res.status(201).json(event);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEventController = async (req: Request, res: Response) => {
    try {
        const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

    const updated = await updateEvent(id, req.body);
    res.status(200).json(updated);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEventController = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id)
  ? req.params.id[0]
  : req.params.id;
    const result = await deleteEvent(id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};