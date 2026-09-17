import Funcionario from "./funcionario";
import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Empresa {
    public razaoSocial: string;
    public nomeFantasia: string;
    public cnpj: string;
    public endereco: Endereco;
    public funcionarios: Funcionario[];
    public telefones: Telefone[];

    constructor(
        funcionarios: Funcionario[],
        endereco: Endereco,
        razaoSocial: string,
        nomeFantasia: string,
        cnpj: string,
        telefones: Telefone[]
    ) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.telefones = telefones;
    }
}