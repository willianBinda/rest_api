create schema blog;
create table blog.post (
	id serial primary key,
	title text not null,
	content text not null,
	data timestamp default now());
delete from blog.post;	
insert into blog.post values 
(default, 'O Senhor dos Anéis', 'Literatura Estrangeira', default),
(default, 'Harry Potter', 'Literatura Estrangeira', default),
(default, 'Iaia Garcia', 'Literatura Brasileira', default),
(default, 'Meu pé de laranja lima', 'Literatura Brasileira', default),
(default, 'Sistemas de Banco de Dados', 'SGBDs', default);

select * from blog.post;

	