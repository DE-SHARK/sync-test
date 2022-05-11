// 删除石英磨具输入原矿
<recipetype:appliedenergistics2:grinder>.removeRecipe(<tag:items:forge:dusts>);

// 删除筛子输出碎片
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_copper>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_lead>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_nickel>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_silver>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_tin>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_aluminum>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_uranium>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_zinc>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_iron>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_gold>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_osmium>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_cobalt>);
// 添加筛子输出矿石沙砾
<recipetype:exnihilosequentia:sieve>.create("iron").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_iron>).addRoll("flint", 0.25).addRoll("iron", 0.15).addRoll("diamond", 0.10);
<recipetype:exnihilosequentia:sieve>.create("gold").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_gold>).addRoll("flint", 0.05).addRoll("iron", 0.15).addRoll("diamond", 0.075);
<recipetype:exnihilosequentia:sieve>.create("osmium").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_osmium>).addRoll("iron", 0.05).addRoll("diamond", 0.10);
<recipetype:exnihilosequentia:sieve>.create("gold_1").setInput(<item:exnihilosequentia:crushed_netherrack>).addDrop(<item:kubejs:gravel_gold>).addRoll("iron", 0.25).addRoll("diamond", 0.10);
<recipetype:exnihilosequentia:sieve>.create("cobalt").setInput(<item:exnihilosequentia:crushed_netherrack>).addDrop(<item:kubejs:gravel_cobalt>).addRoll("iron", 0.05).addRoll("diamond", 0.10);
<recipetype:exnihilosequentia:sieve>.create("copper").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_copper>).addRoll("flint", 0.05).addRoll("iron", 0.10).addRoll("diamond", 0.075);
<recipetype:exnihilosequentia:sieve>.create("lead").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_lead>).addRoll("flint", 0.05).addRoll("iron", 0.10).addRoll("diamond", 0.075);
<recipetype:exnihilosequentia:sieve>.create("nickel").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_nickel>).addRoll("flint", 0.05).addRoll("iron", 0.10).addRoll("diamond", 0.075);
<recipetype:exnihilosequentia:sieve>.create("silver").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_silver>).addRoll("flint", 0.05).addRoll("iron", 0.10).addRoll("diamond", 0.075);
<recipetype:exnihilosequentia:sieve>.create("tin").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_tin>).addRoll("flint", 0.05).addRoll("iron", 0.10).addRoll("diamond", 0.075);
<recipetype:exnihilosequentia:sieve>.create("zinc").setInput(<item:minecraft:gravel>).addDrop(<item:kubejs:gravel_zinc>).addRoll("flint", 0.05).addRoll("iron", 0.10).addRoll("diamond", 0.075);

<recipetype:exnihilosequentia:sieve>.create("red").setInput(<item:minecraft:gravel>).addDrop(<item:thermal:ruby>).addRoll("iron", 0.016).addRoll("diamond", 0.008);
<recipetype:exnihilosequentia:sieve>.create("blue").setInput(<item:minecraft:gravel>).addDrop(<item:thermal:sapphire>).addRoll("iron", 0.016).addRoll("diamond", 0.008);

// 概率修改
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:seed_kelp>);
<recipetype:exnihilosequentia:sieve>.create("seed_kelp").setInput(<item:minecraft:sand>).addDrop(<item:exnihilosequentia:seed_kelp>).addRoll("string", 0.10).setWaterlogged();
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:redstone>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:thermal:cinnabar>);
<recipetype:exnihilosequentia:sieve>.create("cinnabar").setInput(<item:minecraft:gravel>).addDrop(<item:thermal:cinnabar>).addRoll("iron", 0.05).addRoll("diamond", 0.075);

<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:fluix_dust>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:sky_dust>);
<recipetype:exnihilosequentia:sieve>.create("sky_dust").setInput(<item:exnihilosequentia:dust>).addDrop(<item:appliedenergistics2:sky_dust>).addRoll("iron", 0.05).addRoll("diamond", 0.075);

<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:dirt>);
