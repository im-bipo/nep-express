/*
  Warnings:

  - You are about to drop the column `description` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "description",
DROP COLUMN "name";
