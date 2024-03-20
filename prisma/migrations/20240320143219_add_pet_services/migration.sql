/*
  Warnings:

  - Added the required column `serviceId` to the `PetService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PetService" ADD COLUMN     "serviceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PetService" ADD CONSTRAINT "PetService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
