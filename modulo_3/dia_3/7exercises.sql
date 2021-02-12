USE PecasFornecedores;
SELECT * from Pecas
WHERE name LIKE 'GR%';
SELECT * from Fornecimentos
WHERE code LIKE '%2%';
SELECT peca, preco from Fornecimentos
WHERE Fornecedor LIKE '%N%';
SELECT * from Fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;
SELECT COUNT(*) as 'Quantidades de Empresas com F no código' from Fornecedores
WHERE code LIKE '%F%';
SELECT * from Fornecimentos
WHERE Preco > 15 AND Preco < 40;
SELECT COUNT(*) as 'Quantidade de vendas no período' from Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';


