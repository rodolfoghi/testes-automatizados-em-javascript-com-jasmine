describe("Paciente", function(){
	it("deve calcular imc", function() {
		var mauricio = new Paciente("Mauricio", 30, 90, 1.80);

		expect(mauricio.imc()).toEqual(90 / (1.80 * 1.80));
	});

	it("deve calcular batimentos", function() {
		var mauricio = new Paciente("Mauricio", 30, 90, 1.80);

		expect(mauricio.batimentos()).toEqual(30 * 365 * 24 * 60 * 80);
	});
});