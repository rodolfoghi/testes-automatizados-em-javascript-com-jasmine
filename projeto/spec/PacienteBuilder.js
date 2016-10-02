function PacienteBuilder(){
	var nome = "Mauricio";
	var idade = 30;
	var peso = 90;
	var altura = 1.80;
	
	var clazz = {
		constroi: function(){
			return new Paciente(nome, peso, idade, altura);
		},

		comIdade: function(valor){
			idade = valor;
			return this;
		},

		comPeso: function(valor){
			peso = valor;
			return this;
		}
	};

	return clazz;
};