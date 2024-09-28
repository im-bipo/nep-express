/*
  Warnings:

  - You are about to drop the column `category` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `lat` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `long` on the `Place` table. All the data in the column will be lost.
  - The `rating` column on the `Place` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `categories` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "category",
DROP COLUMN "lat",
DROP COLUMN "long",
ADD COLUMN     "categories" TEXT NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION;
