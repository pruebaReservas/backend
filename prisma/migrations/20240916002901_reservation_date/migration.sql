/*
  Warnings:

  - Added the required column `end_date` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reservations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_users" INTEGER NOT NULL,
    "id_rooms" INTEGER NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Reservations_id_users_fkey" FOREIGN KEY ("id_users") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservations_id_rooms_fkey" FOREIGN KEY ("id_rooms") REFERENCES "Rooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reservations" ("createdAt", "id", "id_rooms", "id_users", "updateAt") SELECT "createdAt", "id", "id_rooms", "id_users", "updateAt" FROM "Reservations";
DROP TABLE "Reservations";
ALTER TABLE "new_Reservations" RENAME TO "Reservations";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
