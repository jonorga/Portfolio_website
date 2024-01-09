var GRSectOpen = false
var LPDSectOpen = false
var QDSectOpen = false
const max_height = 300
const open_speed = 30
const close_speed = 20

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



async function GRFunc() {
	var infoSect = document.querySelector('.grsect')
	if (GRSectOpen)
	{
		var hi = max_height
		var temp = hi + 'px'
		while (hi > -5) {
			infoSect.style.height = temp
			hi -= 10
			temp = hi + 'px'
			await sleep(close_speed);
		}
	}
	else
	{
		var hi = 0
		var temp = hi + 'px'
		while (hi < max_height) {
			infoSect.style.height = temp
			hi += 10
			temp = hi + 'px'
			await sleep(open_speed);
		}
	}
	GRSectOpen = !GRSectOpen
}

async function LPDFunc() {
	var infoSect = document.querySelector('.lpdsect')
	if (LPDSectOpen)
	{
		var hi = max_height
		var temp = hi + 'px'
		while (hi > -5) {
			infoSect.style.height = temp
			hi -= 10
			temp = hi + 'px'
			await sleep(close_speed);
		}
	}
	else
	{
		var hi = 0
		var temp = hi + 'px'
		while (hi < max_height) {
			infoSect.style.height = temp
			hi += 10
			temp = hi + 'px'
			await sleep(open_speed);
		}
	}
	LPDSectOpen = !LPDSectOpen
}

async function QDFunc() {
	var infoSect = document.querySelector('.qdsect')
	if (QDSectOpen)
	{
		var hi = max_height
		var temp = hi + 'px'
		while (hi > -5) {
			infoSect.style.height = temp
			hi -= 10
			temp = hi + 'px'
			await sleep(close_speed);
		}
	}
	else
	{
		var hi = 0
		var temp = hi + 'px'
		while (hi < max_height) {
			infoSect.style.height = temp
			hi += 10
			temp = hi + 'px'
			await sleep(open_speed);
		}
	}
	QDSectOpen = !QDSectOpen
}
