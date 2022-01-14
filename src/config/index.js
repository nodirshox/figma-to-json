const CONFIG = {
	HTTP_PORT: getConf("HTTP_PORT", 3000),
};

function getConf(name, def = "") {
	if (process.env[name]) {
		return process.env[name];
	}
	return def;
}

exports.CONFIG = CONFIG;
