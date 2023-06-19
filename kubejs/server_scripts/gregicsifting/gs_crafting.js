ServerEvents.recipes(event => {
    //Meshes
        event.shaped('1x exnihilosequentia:flint_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.bronze'}).id('exnihilosequentia:ens_flint_mesh')
        event.shaped('1x exnihilosequentia:iron_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.steel'}).id('exnihilosequentia:ens_iron_mesh')
        event.shaped('1x exnihilosequentia:diamond_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.aluminium'}).id('exnihilosequentia:ens_diamond_mesh')
        event.shaped('1x exnihilosequentia:emerald_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.stainless_steel'}).id('exnihilosequentia:ens_emerald_mesh')
        event.shaped('1x exnihilosequentia:netherite_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.titanium'}).id('exnihilosequentia:ens_netherite_mesh')
    //Electric-Sieve
        function GTsieve(tier, circuit, piston, conveyor, hull, cable){
            event.shaped(`1x gtceu:electric_sieve.${tier}`, ['CPC', 'BHB', 'WSW'], {C: circuit, P: piston, B: conveyor, H: hull, W: cable, S: '#exnihilosequentia:sieves'}).id(`gregicsifting:shaped/electric_sieve.${tier}`)
        }
        GTsieve('lv', '#forge:circuits/lv', 'gtceu:electric.piston.lv', 'gtceu:conveyor.module.lv', 'gtceu:hull.lv', 'gtceu:cable_single.tin')
        GTsieve('mv', '#forge:circuits/mv', 'gtceu:electric.piston.mv', 'gtceu:conveyor.module.mv', 'gtceu:hull.mv', 'gtceu:cable_single.copper')
        GTsieve('hv', '#forge:circuits/hv', 'gtceu:electric.piston.hv', 'gtceu:conveyor.module.hv', 'gtceu:hull.hv', 'gtceu:cable_single.gold')
        GTsieve('ev', '#forge:circuits/ev', 'gtceu:electric.piston.ev', 'gtceu:conveyor.module.ev', 'gtceu:hull.ev', 'gtceu:cable_single.aluminium')
        GTsieve('iv', '#forge:circuits/iv', 'gtceu:electric.piston.iv', 'gtceu:conveyor.module.iv', 'gtceu:hull.iv', 'gtceu:cable_single.platinum')
    //Crook
        event.recipes.exnihilosequentia.crook('gtceu:rubber_leaves')
            .addDrop('gtceu:rubber_sapling', 1, 0.05)
            .id('gregicsifting:crook/rubber_sapling')
    //Barrel-Transformation
        event.recipes.exnihilosequentia.fluid_item('minecraft:glowstone_dust', 'minecraft:end_stone', 'gtceu:helium').id('exnihilosequentia:fluid_item/ens_end_stone')
    //Removal
        //gravel
            event.remove({id:'exnihilosequentia:sieve/ens_copper_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_lead_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_silver_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_nickel_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_iron_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_tin_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_gold_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_aluminum_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_zinc_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_uranium_pieces_gravel'})
	        event.remove({id:'exnihilosequentia:sieve/ens_platinum_pieces_gravel'})
            event.remove({id:'exnihilosequentia:sieve/ens_diamond'})
	        event.remove({id:'exnihilosequentia:sieve/ens_emerald'})
	        event.remove({id:'exnihilosequentia:sieve/ens_lapis_lazuli'})
	        event.remove({id:'exnihilosequentia:sieve/ens_coal'})
            event.remove({id:'exnihilosequentia:sieve/ens_flint'})
        //sand
            event.remove({id:'exnihilosequentia:sieve/ens_cocoa_beans'})
	        event.remove({id:'exnihilosequentia:sieve/ens_prismarine_shard'})
	        event.remove({id:'exnihilosequentia:sieve/ens_prismarine_crystals'})
	        event.remove({id:'exnihilosequentia:sieve/ens_iron_pieces_sand'})
            event.remove({id:'exnihilosequentia:sieve/ens_seed_blue_coral'})
	        event.remove({id:'exnihilosequentia:sieve/ens_seed_red_coral'})
	        event.remove({id:'exnihilosequentia:sieve/ens_seed_yellow_coral'})
	        event.remove({id:'exnihilosequentia:sieve/ens_seed_pink_coral'})
	        event.remove({id:'exnihilosequentia:sieve/ens_seed_purple_coral'})
            event.remove({id:'exnihilosequentia:sieve/ens_seagrass'})
        //netherrack
            event.remove({id:'exnihilosequentia:sieve/ens_gold_pieces_crushed_netherrack'})
	        event.remove({id:'exnihilosequentia:sieve/ens_warped_nylium_spore'})
	        event.remove({id:'exnihilosequentia:sieve/ens_crimson_nylium_spore'})
	        event.remove({id:'exnihilosequentia:sieve/ens_pebble_netherrack'})
        //endstone
	        event.remove({id:'exnihilosequentia:sieve/ens_pebble_end_stone'})
	        event.remove({id:'exnihilosequentia:sieve/ens_ender_pearl'})
	        event.remove({id:'exnihilosequentia:sieve/ens_netherite_scrap'})
})