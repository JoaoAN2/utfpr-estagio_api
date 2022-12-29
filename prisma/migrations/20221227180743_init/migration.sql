-- CreateTable
CREATE TABLE `curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feriado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `anual` BOOLEAN NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cnpj` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `logradouro` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aluno` (
    `usuario_id` VARCHAR(191) NOT NULL,
    `ra` VARCHAR(191) NOT NULL,
    `periodo` INTEGER NOT NULL,
    `curso_id` INTEGER NOT NULL,
    `minutos_totais` INTEGER NOT NULL,
    `minutos_restantes` INTEGER NOT NULL,
    `minutos_concluidos` INTEGER NOT NULL,

    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prae` (
    `usuario_id` VARCHAR(191) NOT NULL,
    `curso_id` INTEGER NOT NULL,

    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supervisor` (
    `usuario_id` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `uce_id` INTEGER NOT NULL,

    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orientador` (
    `usuario_id` VARCHAR(191) NOT NULL,
    `departamento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estagio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aluno_id` VARCHAR(191) NOT NULL,
    `prae_id` VARCHAR(191) NOT NULL,
    `orientador_id` VARCHAR(191) NOT NULL,
    `supervisor_id` VARCHAR(191) NOT NULL,
    `minuto_semanal` INTEGER NOT NULL,
    `minuto_total` INTEGER NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_final` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datas_estagio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `estagio_id` INTEGER NOT NULL,
    `tempo_concluido` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jornada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estagio_id` INTEGER NOT NULL,
    `dia_da_semana` INTEGER NOT NULL,
    `tempo_jornada` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aluno` ADD CONSTRAINT `aluno_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aluno` ADD CONSTRAINT `aluno_curso_id_fkey` FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prae` ADD CONSTRAINT `prae_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prae` ADD CONSTRAINT `prae_curso_id_fkey` FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `supervisor` ADD CONSTRAINT `supervisor_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `supervisor` ADD CONSTRAINT `supervisor_uce_id_fkey` FOREIGN KEY (`uce_id`) REFERENCES `uce`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orientador` ADD CONSTRAINT `orientador_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estagio` ADD CONSTRAINT `estagio_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `aluno`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estagio` ADD CONSTRAINT `estagio_prae_id_fkey` FOREIGN KEY (`prae_id`) REFERENCES `prae`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estagio` ADD CONSTRAINT `estagio_orientador_id_fkey` FOREIGN KEY (`orientador_id`) REFERENCES `orientador`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estagio` ADD CONSTRAINT `estagio_supervisor_id_fkey` FOREIGN KEY (`supervisor_id`) REFERENCES `supervisor`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datas_estagio` ADD CONSTRAINT `datas_estagio_estagio_id_fkey` FOREIGN KEY (`estagio_id`) REFERENCES `estagio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jornada` ADD CONSTRAINT `jornada_estagio_id_fkey` FOREIGN KEY (`estagio_id`) REFERENCES `estagio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
