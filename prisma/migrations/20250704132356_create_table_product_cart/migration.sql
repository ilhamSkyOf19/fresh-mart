-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `favorite` BOOLEAN NOT NULL DEFAULT false,
    `img` VARCHAR(191) NOT NULL,
    `netWeight` DOUBLE NOT NULL,
    `stock` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idProduct` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_idProduct_fkey` FOREIGN KEY (`idProduct`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
