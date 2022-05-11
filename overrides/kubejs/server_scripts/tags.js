// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("appliedenergistics2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let LV = (id, x) => MOD("libvulpes", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FE = (id, x) => MOD("forge", id, x)
let MEK = (id, x) => MOD("mekanism", id, x)
let EN = (id, x) => MOD("exnihilosequentia", id, x)

onEvent('item.tags', event => {
	event.removeAllTagsFrom('libvulpes:duststeel')
	event.removeAllTagsFrom(MEK('ingot_uranium'))
	event.removeAllTagsFrom(EN('ingot_uranium'))

	event.get('forge:ingots').add(KJ('ingot_uranium'))
	event.get('forge:ingots/uranium').add(KJ('ingot_uranium'))

	event.get("forge:circuit_press")
	.add(AE2("name_press"))
	.add(AE2("silicon_press"))
	.add(AE2("logic_processor_press"))
	.add(AE2("engineering_processor_press"))
	.add(AE2("calculation_processor_press"))
	event.get('thermal:crafting/casts').add(KJ("three_cast")).add(KJ("eight_cast")).add(KJ("plus_cast")).add(KJ("minus_cast")).add(KJ("multiply_cast")).add(KJ("divide_cast")).add(FE("#circuit_press"))

	event.get('create:upright_on_belt')
	.add(AE2("red_paint_ball"))
	.add(AE2("yellow_paint_ball"))
	.add(AE2("green_paint_ball"))
	.add(AE2("blue_paint_ball"))
	.add(AE2("magenta_paint_ball"))
	.add(AE2("black_paint_ball"))

	event.get('forge:chromatic_resonators').add(KJ('chromatic_resonator'))
})
