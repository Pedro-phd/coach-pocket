/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Member_document_key" ON "Member"("document");

-- CreateIndex
CREATE INDEX "Member_name_coachId_idx" ON "Member"("name", "coachId");
