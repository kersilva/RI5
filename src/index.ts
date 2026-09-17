import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

let endereco = new Endereco(123, "Av. Paulista", "Jardim Paulista", "São Paulo")
let telefone = new Telefone("011", "9-9999-9999")
let funcionario = new Funcionario("Tony Stark", "123456789", "999.999.999-99", endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa(funcionarios, endereco, "ABC LTDA", "Mercado online", "999-999-999-999-99", telefones)

let descritor = new Descritor
descritor.descrever(empresa)

endereco = new Endereco(1007, "Mountain Drive", "Wayne Manor", "Gotham")
telefone = new Telefone("468", "555-1939")
funcionario = new Funcionario("Bruce Wayne", "1939", "027.005.193-92", endereco, telefone)
funcionarios = [funcionario]
telefones = [telefone]
empresa = new Empresa(funcionarios, endereco, "Indústrias Wayne", "Wayne Corp", "999-999-999-000-99", telefones)

descritor = new Descritor
descritor.descrever(empresa)