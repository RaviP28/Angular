CREATE PROCEDURE sp_GetImagesForProduct
(
	@productId int
)
AS

SELECT
	[full],
	thumb,
	id
FROM
	[Image]
WHERE
	ProductID = @productId