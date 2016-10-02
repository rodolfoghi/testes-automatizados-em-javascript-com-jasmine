describe("Agendamento", function() {

	var paciente;
	var agenda;

	beforeEach(function() {
		paciente = PacienteBuilder().constroi();		
		agenda = new Agendamento();
	});

	it("deve criar uma consulta para 20 dias a frente da data atual da consulta", function() {		
		var consulta = new Consulta(paciente, [], false, false, new Date(2014, 7, 1));
		var novaConsulta = agenda.para(consulta);
		
		expect(novaConsulta.getDate().toString()).toEqual(new Date(2014,7,21).toString());
	});

	it("deve pular fins de semana", function() {

        var consulta = new Consulta(paciente, [], false, false, new Date(2014, 5, 30));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getDate().toString()).toEqual(new Date(2014,6,21).toString());

    });
});