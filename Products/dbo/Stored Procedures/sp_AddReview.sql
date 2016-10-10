CREATE PROCEDURE sp_AddReview
(
	@productId int,
	@stars int,
	@author nvarchar(500),
	@body ntext
)
AS
INSERT INTO Review(
	ProductId,
	starts,
	author,
	body
	)

VALUES(
	@productId,
	@stars,
	@author,
	@body
	)
