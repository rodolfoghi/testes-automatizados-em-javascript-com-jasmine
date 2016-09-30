describe("Consulta", function(){
	it("deve considerar preco zero em retornos", function() {
		var mauricio = new Paciente("Mauricio", 30, 90, 1.80);
		var consulta = new Consulta(mauricio, ["p1","p2"], false, true);

		expect(consulta.preco()).toEqual(0);
	});

	it("procedimentos comuns devem custar 25 reais cada", function() {
		var mauricio = new Paciente("Mauricio", 30, 90, 1.80);
		var consulta = new Consulta(mauricio, ["p1","p2"], false, false);

		expect(consulta.preco()).toEqual(50);
	});

	it("consulta particular só com procedimentos comuns", function() {
		var mauricio = new Paciente("Mauricio", 30, 90, 1.80);
		var consulta = new Consulta(mauricio, ["p1","p2"], true, false);

		expect(consulta.preco()).toEqual(100);
	});

	it("consulta particular com procedimentos comuns e especiais", function() {
		var mauricio = new Paciente("Mauricio", 30, 90, 1.80);
		var consulta = new Consulta(mauricio, 
			["procedimento-comum1", "raio-x", "procedimento-comum2"], 
			true, 
			false);

		expect(consulta.preco()).toEqual(210);
	});
});