let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let IE = (id, x) => MOD("immersiveengineering", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let MEK = (id, x) => MOD("mekanism", id, x)

onEvent('jei.hide.items', event => {
	unwantedItem(event)
})

onEvent('item.tooltip', tooltip => {
    tooltip.add('exnihilosequentia:crucible_fired', [`§7该物品在服务器中存在限制：`, `§7自动化工作中的坩埚不能超过10个。`])
    tooltip.add('#exnihilosequentia:barrels', [`§7该物品在服务器中存在限制：`, `§7自动化工作中的桶不能超过5个。`])
    tooltip.add('exnihilosequentia:barrel_stone', [`§7该物品在服务器中存在限制：`, `§7自动化工作中的桶不能超过5个。`])
    tooltip.add('mekanismgenerators:fission_reactor_casing', [`§7该结构在服务器中存在限制：`, `§7裂变反应堆只能存在一台且大小不能超过5x7x5。`])
    tooltip.add('mekanismgenerators:turbine_casing', [`§7该结构在服务器中存在限制：`, `§7涡轮只能存在一台且大小不能超过5x7x5。`])
    tooltip.add('mekanism:boiler_casing', [`§7该结构在服务器中存在限制：`, `§7锅炉只能存在一台且大小不能超过5x7x5。`])

	tooltip.add('create:windmill_bearing', [`§7最大应力输出：4096`, `§7最大风帆数量：64`])

	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标： ${stage == "4" ? "§6最终章" : "§6章节 " + stage}`, '§8建议自动化制作'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7额外目标： §6章节 ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7在序列组装`, `§7配方中不消耗`])

	tooltip.add("advancedrocketry:planet_id_chip", [`§3使用方式：`, `1. §7使用配方合成`, `2. §7打开火箭UI`, `3. §7点击UI中的导航电脑图标`, `4. §7插入星球ID芯片`, "§8§o(使用选择目的地菜单会使游戏崩溃)"]);

	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	main_assembly('kubejs:kinetic_mechanism', "1")
	bonus_assembly('kubejs:sealed_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:infernal_mechanism', "2A")
	main_assembly('kubejs:inductive_mechanism', "3")
	bonus_assembly('kubejs:abstruse_mechanism', "3A")
	main_assembly('kubejs:calculation_mechanism', "4")

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8类型：§7火成`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8类型：§7草本`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8类型：§7不稳定`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8类型：§7晶化`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8类型：§7金属`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8类型：§7宝石`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8类型：§7催化`]));

	tooltip.add("kubejs:accellerator_redstone", ["§7用于催化剂研究时：", "  §6会使§e正确的§6反应物 ",
		"  §6在§e不正确的§6矿车槽位中不被消耗"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7用于催化剂研究时：", "  §6会使§e正确的§6反应物 ",
		"  §6在§e不正确的§6矿车槽位中不被消耗"]);

	for (i = 0; i < 15; i++)
		tooltip.add(`kubejs:failed_alchemy_${i}`, [
			`§7放在离心分离机中分析。`,
			"",
			"§6产物",
			"- 余烬 §7标志着每个不正确的材料",
			"- 红石 §7标志着每个正确的材料",
			"   §7但在不正确的格中",
			"- 荧石 §7标志着每个正确的材料",
			"   §7并且在正确的格中"
	])

})

onEvent('jei.hide.fluids', event => {
	event.hide("advancedrocketry:rocket_fuel")
})

onEvent('jei.subtypes', event => {
	event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.add.items', event => {
    event.add('mekanism:basic_universal_cable')
    event.add('mekanism:basic_pressurized_tube')

	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "minecraft:overworld", DimensionName: " Earth " }))
	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "minecraft:earth", DimensionName: " Earth " }))

})

onEvent('jei.information', event => {
	// event.add('thermal:blitz_rod', ["Obtain by running a §9Charged Staff§0 (with Charge) and any amount of §9Tiny Smoke Clouds§0 through an §5Alchemical Laser§0."])
	event.add('thermal:blizz_rod', ["用§9熵变机械臂§0（充能的）和任意数量§9雪球§0通过§5炼金镭射§0制作而成。"])
	event.add('thermal:basalz_rod', ["用§9通量磁铁§0（充能的）和任意数量§9玄武岩§0通过§5炼金镭射§0制作而成。"])
	event.add('kubejs:substrate_uranium', ["只能用§9混沌催化剂§0和任意数量特定种类的§9反应物§0通过§5炼金镭射§0制作而成。", " ", "特定反应物§9根据世界种子号不同而变化§0。"])
	event.add('kubejs:substrate_platinum', ["只能用§9混沌催化剂§0和任意数量特定种类的§9反应物§0通过§5炼金镭射§0制作而成。", " ", "特定反应物§9根据世界种子号不同而变化§0。"])

	event.add('kubejs:alchemical_laser', ["此物品代表§5炼金镭射§0机器。查看§9思索内容§0了解如何搭建炼金镭射结构。"])

	let catalyst = (name, me) =>
		[
			`§0通过在§5炼金镭射§0中§9正确找出并混合§0四种§9${me ? name : name + " §0反应物"}§0获得。`, " ",
			`§81.§0 在漏斗矿车最前面四格里分别放入一个§9${me ? name : name + " §0反应物"}§0`,
			`§82.§0 对放入反应物的漏斗矿车使用§5炼金镭射§0来获得§9${me ? me : name + " §9催化剂"}§0，或是该催化剂混合配方的§9提示§0。`, " ",
			"§8注意：§0 正确的混合配方也许会有同种§9反应物§0",
			"§8注意：§0 正确的混合配方§9根据世界种子号不同而变化§0",
			"§8可选：§0 在第五格放置§9红石促成剂§0或§9荧石促成剂§0来获得§9额外的提示§0",
		]

	event.add('kubejs:substrate_igneous', catalyst("火成"))
	event.add('kubejs:substrate_herbal', catalyst("草本"))
	event.add('kubejs:substrate_volatile', catalyst("不稳定"))
	event.add('kubejs:substrate_crystal', catalyst("晶化"))
	event.add('kubejs:substrate_metal', catalyst("金属"))
	event.add('kubejs:substrate_gem', catalyst("宝石"))

	let beer = (id, igs) =>
		event.add('drinkbeer:beer_mug' + id, ["在酒桶中放入4个空啤酒杯，" + igs + "来酿造这种饮料。"])

	beer("", "3个小麦和1桶水")
	beer("_blaze_stout", "2个小麦，1个烈焰粉和1桶水")
	beer("_blaze_milk_stout", "1个小麦，1个糖，1个烈焰粉和1桶水") //wtf are these drinks
	beer("_apple_lambic", "2个小麦，1个苹果和1桶水")
	beer("_sweet_berry_kriek", "2个小麦，1个甜浆果和1桶水")
	beer("_haars_icey_pale_lager", "3个小麦和1块蓝冰")
	beer("_pumpkin_kvass", "2个面包，1个南瓜和1桶水")

	event.add('kubejs:substrate_chaos', catalyst("催化剂", "混沌催化剂").concat([
		" ", "§8用法：§0", "用§9混沌催化剂§0与一种任意数量§9反应物§0通过§5炼金镭射§0§9转变成§0另一种反应物。嬗变配方§9根据世界种子号不同而变化§0。"
	]))
})

onEvent('jei.remove.categories', event => {
	event.yeetIf(element => {
		let name = (element.getUid() + "")
		return name.startsWith('advancedrocketry:') || name.startsWith("thermal:centrifuge")
	});
})

function unwantedItem(event) {
	//chouti

	event.hide('botania:loonium')
	event.hide('botania:floating_loonium')

    event.hide('appliedenergistics2:facade')

    event.hide(/mekanism:.*_cable/)
    event.hide(/mekanism:.*_pipe/)
    event.hide(/mekanism:.*_tube/)
    event.hide(/mekanism:.*_transporter/)
    event.hide(/mekanism:.*_conductor/)
    event.hide(/mekanism:.*factory/)

    event.hide('advancedrocketry:platepress')
	event.hide('botania:conjuration_catalyst')
	event.hide('appliedenergistics2:network_tool')
	event.hide('appliedenergistics2:cell_workbench')
	event.hide('mekanism:cardboard_box')
	event.hide('appliedenergistics2:spatial_anchor')
	event.hide('mekanism:upgrade_anchor')
	event.hide('tconstruct:efln_ball')
	event.hide('telepastries:overworld_cake')
	event.hide('botania:lens_mine')
	event.hide('botania:lens_explosive')
	event.hide('botania:lens_weight')
	event.hide('botania:lens_weight')
	event.hide('botania:terraform_rod')
	event.hide('botania:ender_hand')
    event.hide('thermal:explosive_grenade')
	event.hide('thermal:fire_grenade')
	event.hide('thermal:ice_grenade')
	event.hide('thermal:phyto_tnt')
	event.hide('appliedenergistics2:tiny_tnt')
	event.hide('thermal:gold_plate')
	event.hide('thermal:iron_plate')
	event.hide('thermal:copper_plate')
    event.hide('thermal:lead_ingot')
    event.hide('mekanism:dynamic_valve')
	event.hide('appliedenergistics2:matter_cannon')
	event.hide('appliedenergistics2:matter_ball')
	event.hide('mekanism:ingot_uranium')
	event.hide('exnihilosequentia:ingot_uranium')
	event.hide('advancedrocketry:bucketrocketfuel')
	event.hide('mekanism:creative_fluid_tank')
	event.hide('mekanism:induction_casing')
	event.hide('mekanism:induction_port')
	event.hide(/botania:red_string*/)
	event.hide(/exnihilosequentia:.*_barrel/)
	event.hide(/exnihilosequentia:barrel.*/)
	event.hide(/excompressum:auto_.*/)
	event.hide('excompressum:rationing_auto_compressor')
	event.hide('thermal:xp_crystal')
	event.hide('appliedenergistics2:spatial_pylon')
	event.hide('appliedenergistics2:spatial_io_port')
	event.hide('appliedenergistics2:2_cubed_spatial_cell_component')
	event.hide('appliedenergistics2:16_cubed_spatial_cell_component')
	event.hide('appliedenergistics2:128_cubed_spatial_cell_component')
	event.hide('appliedenergistics2:2_cubed_spatial_storage_cell')
	event.hide('appliedenergistics2:16_cubed_spatial_storage_cell')
	event.hide('appliedenergistics2:128_cubed_spatial_storage_cell')
	event.hide('extrabotany:annoyingflower')

}