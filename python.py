python

import mysql.connector

# realiza conexao com banco de dados - MYSQL
conn = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="epic"
)

# declara cursor que vai receber os registros do select
cur = conn.cursor() 

#realiza consulta no BD
cur.execute("SELECT navegador.id_navegador as id_nav, navegador.nome as nome_nav, navegador.titulo as tit_nav, cargo.nome as nome_car, cargo.descricao as desc_nav, navio.nome as nome_navio  FROM `navegador` JOIN cargo ON cargo.id_cargo = navegador.cargo JOIN navio on navio.id_navio = navegador.navio ORDER BY cargo.id_cargo; ") 

print(f'{'id':30} --- {'nome':30} -- {'titulo':30} --- {'cargo':30} -- {'descrição':30} --- {'navio':30}')
qtdade_registros = 0
# repeticao para registros do select armazenado no cursor (cur)
for id_nav, nome_nav, tit_nav, nome_car, desc_nav, nome_navio in cur: 
    print(f'{id_nav:30} --- {nome_nav:30} -- {tit_nav:30} --- {nome_car:30} -- {desc_nav:30} --- {nome_navio:30}')
    qtdade_registros = qtdade_registros + 1


print(f"----+------------------------------------------+----------------")
print(f"Quantidade de registros: {qtdade_registros}")

# linha em branco
print("")
# solicitar codigo e nome para alterar registro de aluno
cod = input("Digite um código...........: ")
# se for vazio encerra o programa com exit()
if (cod == ""):
    exit()
nome = input("Digite um nome para alterar: ")

# update nome do aluno
# usa recurso de tratamento de erro try/except
try: 
    # executa sql, seguido de valores para ligar valores com parametros
    cur.execute("update navegador set nome = '%s' where id_navegador = %s" % (nome, cod)) 
except mysql.Error as e: 
    print(f"Error: {e}")