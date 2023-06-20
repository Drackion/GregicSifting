ServerEvents.recipes(event => {
    //Meshes
        event.shaped('1x exnihilosequentia:flint_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:bronze_rod'}).id('exnihilosequentia:ens_flint_mesh')
        event.shaped('1x exnihilosequentia:iron_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:steel_rod'}).id('exnihilosequentia:ens_iron_mesh')
        event.shaped('1x exnihilosequentia:diamond_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:aluminium_rod'}).id('exnihilosequentia:ens_diamond_mesh')
        event.shaped('1x exnihilosequentia:emerald_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:stainless_steel_rod'}).id('exnihilosequentia:ens_emerald_mesh')
        event.shaped('1x exnihilosequentia:netherite_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:titanium_rod'}).id('exnihilosequentia:ens_netherite_mesh')
    //Electric-Sieve
        function GTsieve(tier, circuit, piston, conveyor, hull, cable){
            event.shaped(`1x gtceu:${tier}_electric_sieve`, ['CPC', 'BHB', 'WSW'], {C: circuit, P: piston, B: conveyor, H: hull, W: cable, S: '#exnihilosequentia:sieves'}).id(`gregicsifting:shaped/electric_sieve.${tier}`)
        }
        GTsieve('lv', '#forge:circuits/lv', 'gtceu:lv_electric_piston', 'gtceu:lv_conveyor_module', 'gtceu:lv_machine_hull', 'gtceu:tin_single_cable')
        GTsieve('mv', '#forge:circuits/mv', 'gtceu:mv_electric_piston', 'gtceu:mv_conveyor_module', 'gtceu:mv_machine_hull', 'gtceu:copper_single_cable')
        GTsieve('hv', '#forge:circuits/hv', 'gtceu:hv_electric_piston', 'gtceu:hv_conveyor_module', 'gtceu:hv_machine_hull', 'gtceu:gold_single_cable')
        GTsieve('ev', '#forge:circuits/ev', 'gtceu:ev_electric_piston', 'gtceu:ev_conveyor_module', 'gtceu:ev_machine_hull', 'gtceu:aluminium_single_cable')
        GTsieve('iv', '#forge:circuits/iv', 'gtceu:iv_electric_piston', 'gtceu:iv_conveyor_module', 'gtceu:iv_machine_hull', 'gtceu:platinum_single_cable')
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
