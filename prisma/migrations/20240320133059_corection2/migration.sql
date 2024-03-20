/*
  Warnings:

  - You are about to drop the column `name` on the `PetService` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `PetService` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PetService_name_key";

-- AlterTable
ALTER TABLE "PetService" DROP COLUMN "name",
DROP COLUMN "price";
