/*
  Warnings:

  - The `rating` column on the `Place` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION[];
