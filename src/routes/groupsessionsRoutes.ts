// import express, { Router } from "express";
// import {
//   authenticateToken,
//   requireMentor,
//   requireStudent,
//   requireMentorOrStudent,
// } from "../middleware/auth";
// import GroupSessionController from "../controllers/mentor/groupSessionController";
// import { BookGroupSessionController } from "../controllers/student/studentBookGroupSession";

// const router = Router();

// // D.1 Get List of Group Sessions
// router.get(
//   "/",
//   authenticateToken as express.RequestHandler,
//   requireMentorOrStudent as express.RequestHandler,
//   GroupSessionController.getAllGroupSessions as express.RequestHandler
// );

// // D.2 Get Specific Group Session
// router.get(
//   "/:gsid",
//   authenticateToken as express.RequestHandler,
//   requireMentorOrStudent as express.RequestHandler,
//   GroupSessionController.getGroupSessionById as express.RequestHandler
// );

// // D.3 Student Joins Group Session
// router.post(
//   "/join",
//   authenticateToken as express.RequestHandler,
//   requireStudent as express.RequestHandler,
//   BookGroupSessionController.bookGroupSession as express.RequestHandler
// );

// // D.4 Cancel Registration
// router.post(
//   "/cancelregistration",
//   authenticateToken as express.RequestHandler,
//   requireStudent as express.RequestHandler,
//   BookGroupSessionController.cancelRegistration as express.RequestHandler
// );

// // D.5 Get Registered Participant List
// router.get(
//   "/participantlist/:gsid",
//   authenticateToken as express.RequestHandler,
//   requireMentorOrStudent as express.RequestHandler,
//   BookGroupSessionController.getRegisteredParticipantList as express.RequestHandler
// );

// // D.6 Create Group Session
// router
//   .post(
//     "/create",
//     authenticateToken as express.RequestHandler,
//     requireMentor as express.RequestHandler,
//     GroupSessionController.createGroupSession as express.RequestHandler
//   )
//   .put(
//     "/:groupSessionId",
//     authenticateToken as express.RequestHandler,
//     requireMentor as express.RequestHandler,
//     GroupSessionController.updateGroupSession as express.RequestHandler
//   );

// // D.7 Delete Group Session
// router.delete(
//   "/delete/:groupSessionId",
//   authenticateToken as express.RequestHandler,
//   requireMentor as express.RequestHandler,
//   GroupSessionController.deleteGroupSession as express.RequestHandler
// );

// // D.8 Get Group Sessions for Mentor
// router.get(
//   "/mentor/:mID",
//   authenticateToken as express.RequestHandler,
//   requireMentor as express.RequestHandler,
//   GroupSessionController.getGroupSessionsByMentorId as express.RequestHandler
// );

// export default router;

import express, { Router } from "express";
import {
  authenticateToken,
  requireMentor,
  requireStudent,
  requireMentorOrStudent,
} from "../middleware/auth";
import GroupSessionController from "../controllers/mentor/groupSessionController";
import { BookGroupSessionController } from "../controllers/student/studentBookGroupSession";

const router = Router();

router.get(
  "/",
  authenticateToken as express.RequestHandler,
  requireMentorOrStudent as express.RequestHandler,
  GroupSessionController.getAllGroupSessions as express.RequestHandler
);

router.get(
  "/:gsid",
  authenticateToken as express.RequestHandler,
  requireMentorOrStudent as express.RequestHandler,
  GroupSessionController.getGroupSessionById as express.RequestHandler
);

router.post(
  "/join",
  authenticateToken as express.RequestHandler,
  requireStudent as express.RequestHandler,
  BookGroupSessionController.bookGroupSession as express.RequestHandler
);

router.post(
  "/cancel",
  authenticateToken as express.RequestHandler,
  requireStudent as express.RequestHandler,
  BookGroupSessionController.cancelRegistration as express.RequestHandler
);

router.get(
  "/participantlist/:gsid",
  authenticateToken as express.RequestHandler,
  requireMentorOrStudent as express.RequestHandler,
  BookGroupSessionController.getRegisteredParticipantList as express.RequestHandler
);

router
  .post(
    "/create",
    authenticateToken as express.RequestHandler,
    requireMentor as express.RequestHandler,
    GroupSessionController.createGroupSession as express.RequestHandler
  )
  .put(
    "/:groupSessionId",
    authenticateToken as express.RequestHandler,
    requireMentor as express.RequestHandler,
    GroupSessionController.updateGroupSession as express.RequestHandler
  );

router.delete(
  "/delete/:groupSessionId",
  authenticateToken as express.RequestHandler,
  requireMentor as express.RequestHandler,
  GroupSessionController.deleteGroupSession as express.RequestHandler
);

router.get(
  "/mentor/:mID",
  authenticateToken as express.RequestHandler,
  requireMentor as express.RequestHandler,
  GroupSessionController.getGroupSessionsByMentorId as express.RequestHandler
);

export default router;
