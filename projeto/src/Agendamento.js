function Agendamento() {

	var clazz = {

		para: function(consulta) {
			var umDiaEmMiliSegundo = 1000 * 60 * 60 * 24;
			var viteDiasEmMilisegundos = umDiaEmMiliSegundo * 20;
			var novaData = new Date(consulta.getDate().getTime() + viteDiasEmMilisegundos);

			while(novaData.getDay() == 0 || novaData.getDay() == 6) {
				novaData = new Date(novaData.getTime() + umDiaEmMiliSegundo);
			}

			var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), consulta.isRetorno(), novaData);

			return novaConsulta;
		},
	};

	return clazz;
}