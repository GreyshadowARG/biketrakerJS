// importamos el mod de express router para poder poner las rutas en otro archivo
import { Router } from "express";
import Task from "../models/Task";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);



export default router;
