/*
  Warnings:

  - The primary key for the `jornada` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `jornada` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `aluno` MODIFY `minutos_totais` INTEGER NULL,
    MODIFY `minutos_restantes` INTEGER NULL,
    MODIFY `minutos_concluidos` INTEGER NULL;

-- AlterTable
ALTER TABLE `jornada` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`estagio_id`, `dia_da_semana`);

-- AlterTable
ALTER TABLE `usuario` MODIFY `foto` VARCHAR(191) NULL;
