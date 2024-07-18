-- CreateTable
CREATE TABLE `SavedCart` (
    `customerId` BIGINT NOT NULL,
    `productVariants` JSON NOT NULL,

    PRIMARY KEY (`customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
