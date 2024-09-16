-- CreateTable
CREATE TABLE "Reservations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_users" INTEGER NOT NULL,
    "id_rooms" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Reservations_id_users_fkey" FOREIGN KEY ("id_users") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservations_id_rooms_fkey" FOREIGN KEY ("id_rooms") REFERENCES "Rooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
