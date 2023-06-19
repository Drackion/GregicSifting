ServerEvents.recipes(event => {
    function Macerator(Ore, Crushed, Byproduct, Dust, ID){
        event.recipes.gtceu.macerator(`gtceu:macerator/macerate_${ID}_ore_chunk_to_crushed_ore`)
        .itemInputs(Ore)
        .itemOutputs(Crushed, Dust)
        .chancedOutput(Byproduct, 1400, 850)
        .duration(400)
        .EUt(2)  
    }
    //Gravel
        //String
            Macerator('kubejs:chunk.gypsum_stone', '2x gtceu:crushed.gypsum', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_gypsum')
            Macerator('kubejs:chunk.spodumene_stone', '2x gtceu:crushed.spodumene', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_spodumene')
            Macerator('kubejs:chunk.cassiterite_stone', '4x gtceu:crushed.cassiterite', 'gtceu:dust.tin', 'gtceu:dust.stone', 'stone_cassiterite')
            Macerator('kubejs:chunk.coal_stone', '4x gtceu:crushed.coal', 'minecraft:coal', 'gtceu:dust.stone', 'stone_coal')
            Macerator('kubejs:chunk.trona_stone', '4x gtceu:crushed.trona', 'gtceu:dust.sodium', 'gtceu:dust.stone', 'stone_trona')
            Macerator('kubejs:chunk.fullers_earth_stone', '4x gtceu:crushed.fullers_earth', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_fullers_earth')
            Macerator('kubejs:chunk.basaltic_mineral_stone', '2x gtceu:crushed.basaltic_mineral_sand', 'gtceu:dust.basalt', 'gtceu:dust.stone', 'stone_basaltic_mineral_sand')
            Macerator('kubejs:chunk.salt_stone', '4x gtceu:crushed.salt', 'gtceu:gem.rock_salt', 'gtceu:dust.stone', 'stone_salt')
            Macerator('kubejs:chunk.granitic_mineral_stone', '2x gtceu:crushed.granitic_mineral_sand', 'gtceu:dust.deepslate', 'gtceu:dust.stone', 'stone_granitic_mineral_sand')
            Macerator('kubejs:chunk.tin_stone', '2x gtceu:crushed.tin', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_tin')
            Macerator('kubejs:chunk.rock_salt_stone', '4x gtceu:crushed.rock_salt', 'gtceu:gem.salt', 'gtceu:dust.stone', 'stone_rock_salt')
            Macerator('kubejs:chunk.lepidolite_stone', '4x gtceu:crushed.lepidolite', 'gtceu:dust.lithium', 'gtceu:dust.stone', 'stone_lepidolite')
        //Bronze
            Macerator('kubejs:chunk.galena_stone', '2x gtceu:crushed.galena', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_galena')
            Macerator('kubejs:chunk.lead_stone', '2x gtceu:crushed.lead', 'gtceu:dust.silver', 'gtceu:dust.stone', 'stone_lead')
            Macerator('kubejs:chunk.silver_stone', '2x gtceu:crushed.silver', 'gtceu:dust.lead', 'gtceu:dust.stone', 'stone_silver')
            Macerator('kubejs:chunk.zeolite_stone', '6x gtceu:crushed.zeolite', 'gtceu:dust.calcium', 'gtceu:dust.stone', 'stone_zeolite')
            Macerator('kubejs:chunk.glauconite_sand_stone', '6x gtceu:crushed.glauconite_sand', 'gtceu:dust.sodium', 'gtceu:dust.stone', 'stone_glauconite_sand')
            Macerator('kubejs:chunk.oilsands_stone', '2x gtceu:crushed.oilsands', 'gtceu:dust.oilsands', 'gtceu:dust.stone', 'stone_oilsands')
            Macerator('kubejs:chunk.garnet_sand_stone', '2x gtceu:crushed.garnet_sand', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_garnet_sand')
            Macerator('kubejs:chunk.asbestos_stone', '6x gtceu:crushed.asbestos', 'gtceu:dust.diatomite', 'gtceu:dust.stone', 'stone_asbestos')
            Macerator('kubejs:chunk.diatomite_stone', '2x gtceu:crushed.diatomite', 'gtceu:dust.hematite', 'gtceu:dust.stone', 'stone_diatomite')
        //Steel
            Macerator('kubejs:chunk.platinum_stone', '2x gtceu:crushed.platinum', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_platinum')
            Macerator('kubejs:chunk.palladium_stone', '2x gtceu:crushed.palladium', 'gtceu:dust.palladium', 'gtceu:dust.stone', 'stone_palladium')
    //Sand
        //Bronze
            Macerator('kubejs:chunk.copper_sand', '2x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'sand_copper')
            Macerator('kubejs:chunk.redstone_sand', '10x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.stone', 'sand_redstone')
            Macerator('kubejs:chunk.cinnabar_sand', '2x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.stone', 'sand_cinnabar')
            Macerator('kubejs:chunk.chromite_sand', '2x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_chromite')
            Macerator('kubejs:chunk.pyrope_sand', '6x gtceu:crushed.pyrope', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'sand_pyrope')
            Macerator('kubejs:chunk.sapphire_sand', '2x gtceu:crushed.sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_sapphire')
            Macerator('kubejs:chunk.green_sapphire_sand', '2x gtceu:crushed.green_sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_green_sapphire')
        //Steel
            Macerator('kubejs:chunk.chalcopyrite_sand', '2x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'sand_chalcopyrite')
            Macerator('kubejs:chunk.iron_sand', '2x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'sand_iron')
            Macerator('kubejs:chunk.pyrite_sand', '2x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'sand_pyrite')
            Macerator('kubejs:chunk.yellow_limonite_sand', '2x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'sand_yellow_limonite')
            Macerator('kubejs:chunk.malachite_sand', '2x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.stone', 'sand_malachite')
            Macerator('kubejs:chunk.garnierite_sand', '2x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_garnierite')
            Macerator('kubejs:chunk.nickel_sand', '2x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'sand_nickel')
            Macerator('kubejs:chunk.cobaltite_sand', '2x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'sand_cobaltite')
            Macerator('kubejs:chunk.pentlandite_sand', '2x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_pentlandite')
            Macerator('kubejs:chunk.bentonite_sand', '6x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_bentonite')
            Macerator('kubejs:chunk.magnesite_sand', '2x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.stone', 'sand_magnesite')
            Macerator('kubejs:chunk.olivine_sand', '4x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.stone', 'sand_olivine')
        //Aluminium
            Macerator('kubejs:chunk.beryllium_sand', '2x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.stone', 'sand_beryllium')
            Macerator('kubejs:chunk.emerald_sand', '4x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.stone', 'sand_emerald')
            Macerator('kubejs:chunk.thorium_sand', '2x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'sand_thorium')
            Macerator('kubejs:chunk.grossular_sand', '6x gtceu:crushed.grossular', 'gtceu:gem.yellow_garnet', 'gtceu:dust.stone', 'sand_grossular')
            Macerator('kubejs:chunk.spessartine_sand', '6x gtceu:crushed.spessartine', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'sand_spessartine')
            Macerator('kubejs:chunk.pyrolusite_sand', '2x gtceu:crushed.pyrolusite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'sand_pyrolusite')
            Macerator('kubejs:chunk.tantalite_sand', '2x gtceu:crushed.tantalite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'sand_tantalite')
    //Andesite
        //Bronze
            Macerator('kubejs:chunk.redstone_stone', '10x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.stone', 'stone_redstone')
            Macerator('kubejs:chunk.ruby_stone', '2x gtceu:crushed.ruby', 'gtceu:dust.chromium', 'gtceu:dust.stone', 'stone_ruby')
            Macerator('kubejs:chunk.cinnabar_stone', '2x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.stone', 'stone_cinnabar')
            Macerator('kubejs:chunk.chromite_stone', '2x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_chromite')
            Macerator('kubejs:chunk.almandine_stone', '6x gtceu:crushed.almandine', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_almandine')
            Macerator('kubejs:chunk.pyrope_stone', '6x gtceu:crushed.pyrope', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_pyrope')
            Macerator('kubejs:chunk.sapphire_stone', '2x gtceu:crushed.sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_sapphire')
            Macerator('kubejs:chunk.green_sapphire_stone', '2x gtceu:crushed.green_sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_green_sapphire')
            Macerator('kubejs:chunk.topaz_stone', '2x gtceu:crushed.topaz', 'gtceu:gem.blue_topaz', 'gtceu:dust.stone', 'stone_topaz')
            Macerator('kubejs:chunk.blue_topaz_stone', '4x gtceu:crushed.blue_topaz', 'gtceu:gem.topaz', 'gtceu:dust.stone', 'stone_blue_topaz')
        //Steel
            Macerator('kubejs:chunk.chalcopyrite_stone', '2x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'stone_chalcopyrite')
            Macerator('kubejs:chunk.iron_stone', '2x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_iron')
            Macerator('kubejs:chunk.pyrite_stone', '2x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_pyrite')
            Macerator('kubejs:chunk.copper_stone', '2x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'stone_copper')
            Macerator('kubejs:chunk.yellow_limonite_stone', '2x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_yellow_limonite')
            Macerator('kubejs:chunk.malachite_stone', '2x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.stone', 'stone_malachite')
            Macerator('kubejs:chunk.bastnasite_stone', '4x gtceu:crushed.bastnasite', 'gtceu:dust.neodymium', 'gtceu:dust.stone', 'stone_bastnasite')
            Macerator('kubejs:chunk.monazite_stone', '8x gtceu:crushed.monazite', 'gtceu:dust.thorium', 'gtceu:dust.stone', 'stone_monazite')
            Macerator('kubejs:chunk.neodymium_stone', '2x gtceu:crushed.neodymium', 'gtceu:dust.rare_earth', 'gtceu:dust.stone', 'stone_neodymium')
            Macerator('kubejs:chunk.garnierite_stone', '2x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_garnierite')
            Macerator('kubejs:chunk.nickel_stone', '2x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'stone_nickel')
            Macerator('kubejs:chunk.cobaltite_stone', '2x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_cobaltite')
            Macerator('kubejs:chunk.pentlandite_stone', '2x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_pentlandite')
            Macerator('kubejs:chunk.bentonite_stone', '6x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_bentonite')
            Macerator('kubejs:chunk.magnesite_stone', '2x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.stone', 'stone_magnesite')
            Macerator('kubejs:chunk.olivine_stone', '4x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.stone', 'stone_olivine')
            Macerator('kubejs:chunk.pitchblende_stone', '2x gtceu:crushed.pitchblende', 'gtceu:dust.thorium', 'gtceu:dust.stone', 'stone_pitchblende')
            Macerator('kubejs:chunk.uraninite_stone', '2x gtceu:crushed.uraninite', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'stone_uraninite')
            Macerator('kubejs:chunk.graphite_stone', '2x gtceu:crushed.graphite', 'gtceu:dust.carbon', 'gtceu:dust.stone', 'stone_graphite')
            Macerator('kubejs:chunk.diamond_stone', '2x gtceu:crushed.diamond', 'gtceu:dust.graphite', 'gtceu:dust.stone', 'stone_diamond')
            //Coal is in Line - 16
        //Aluminium
            Macerator('kubejs:chunk.beryllium_stone', '2x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.stone', 'stone_beryllium')
            Macerator('kubejs:chunk.emerald_stone', '4x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.stone', 'stone_emerald')
            Macerator('kubejs:chunk.thorium_stone', '2x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'stone_thorium')
            Macerator('kubejs:chunk.soapstone_stone', '6x gtceu:crushed.soapstone', 'gtceu:dust.silicon_dioxide', 'gtceu:dust.stone', 'stone_soapstone')
            Macerator('kubejs:chunk.talc_stone', '4x gtceu:crushed.talc', 'gtceu:dust.clay', 'gtceu:dust.stone', 'stone_talc')
            Macerator('kubejs:chunk.scheelite_stone', '2x gtceu:crushed.scheelite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'stone_scheelite')
            Macerator('kubejs:chunk.tungstate_stone', '2x gtceu:crushed.tungstate', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'stone_tungstate')
            Macerator('kubejs:chunk.lithium_stone', '2x gtceu:crushed.lithium', 'gtceu:dust.lithium', 'gtceu:dust.stone', 'stone_lithium')
    //Granite
        //String
            Macerator('kubejs:chunk.apatite_stone', '8x gtceu:crushed.apatite', 'gtceu:dust.tricalcium_phosphate', 'gtceu:dust.stone', 'stone_apatite')
            Macerator('kubejs:chunk.tricalcium_phosphate_stone', '6x gtceu:crushed.tricalcium_phosphate', 'gtceu:gem.apatite', 'gtceu:dust.stone', 'stone_tricalcium_phosphate')
            Macerator('kubejs:chunk.bauxite_stone', '2x gtceu:crushed.bauxite', 'gtceu:gem.grossular', 'gtceu:dust.stone', 'stone_bauxite')
            Macerator('kubejs:chunk.aluminium_stone', '2x gtceu:crushed.aluminium', 'gtceu:dust.bauxite', 'gtceu:dust.stone', 'stone_aluminium')
            Macerator('kubejs:chunk.ilmenite_stone', '2x gtceu:crushed.ilmenite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_ilmenite')
            Macerator('kubejs:chunk.magnetite_stone', '2x gtceu:crushed.magnetite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_magnetite')
            //Iron
            Macerator('kubejs:chunk.vanadium_magnetite_stone', '2x gtceu:crushed.vanadium_magnetite', 'gtceu:dust.magnetite', 'gtceu:dust.stone', 'stone_vanadium_magnetite')
            Macerator('kubejs:chunk.gold_stone', '2x gtceu:crushed.gold', 'gtceu:dust.copper', 'gtceu:dust.stone', 'stone_gold')
            Macerator('kubejs:chunk.quartzite_stone', '4x gtceu:crushed.quartzite', 'gtceu:gem.certus_quartz', 'gtceu:dust.stone', 'stone_quartzite')
            Macerator('kubejs:chunk.barite_stone', '2x gtceu:crushed.barite', 'gtceu:dust.barite', 'gtceu:dust.stone', 'stone_barite')
            Macerator('kubejs:chunk.certus_quartz_stone', '4x gtceu:crushed.certus_quartz', 'minecraft:quartz', 'gtceu:dust.stone', 'stone_certus_quartz')
            Macerator('kubejs:chunk.tetrahedrite_stone', '2x gtceu:crushed.tetrahedrite', 'gtceu:dust.antimony', 'gtceu:dust.stone', 'stone_tetrahedrite')
            //Copper
            Macerator('kubejs:chunk.stibnite_stone', '2x gtceu:crushed.stibnite', 'gtceu:dust.antimony_trioxide', 'gtceu:dust.stone', 'stone_stibnite')
        //Bronze
            //Redstone
            //Ruby
            //Cinnabar
            //Chromite
            Macerator('kubejs:chunk.bornite_stone', '2x gtceu:crushed.bornite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'stone_bornite')
            Macerator('kubejs:chunk.chalcocite_stone', '2x gtceu:crushed.chalcocite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_chalcocite')
            Macerator('kubejs:chunk.lazurite_stone', '12x gtceu:crushed.lazurite', 'gtceu:gem.sodalite', 'gtceu:dust.stone', 'stone_lazurite')
            Macerator('kubejs:chunk.sodalite_stone', '12x gtceu:crushed.sodalite', 'gtceu:gem.lazurite', 'gtceu:dust.stone', 'stone_sodalite')
            Macerator('kubejs:chunk.lapis_stone', '12x gtceu:crushed.lapis', 'gtceu:gem.lazurite', 'gtceu:dust.stone', 'stone_lapis')
            Macerator('kubejs:chunk.calcite_stone', '2x gtceu:crushed.calcite', 'gtceu:dust.calcium', 'gtceu:dust.stone', 'stone_calcite')
            //Topaz
            //Blue Topaz
        //Steel
            //Chalcopyrite
            //Pyrite
            //Yellow Limonite
            //Bastnasite
            //Monazite
            //Neodymium
            //Garnierite
            //Cobaltite
            //Pentlandite
            //Pitchblende
            //Uraninite
            Macerator('kubejs:chunk.kyanite_stone', '2x gtceu:crushed.kyanite', 'gtceu:dust.talc', 'gtceu:dust.stone', 'stone_kyanite')
            Macerator('kubejs:chunk.mica_stone', '4x gtceu:crushed.mica', 'gtceu:dust.potassium', 'gtceu:dust.stone', 'stone_mica')
            //Cassiterite
            Macerator('kubejs:chunk.pollucite_stone', '2x gtceu:crushed.pollucite', 'gtceu:dust.caesium', 'gtceu:dust.stone', 'stone_pollucite')
        //Aluminium
            //Graphite
            //Diamond
            //Coal
            Macerator('kubejs:chunk.wulfenite_stone', '2x gtceu:crushed.wulfenite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_wulfenite')
            Macerator('kubejs:chunk.molybdenite_stone', '2x gtceu:crushed.molybdenite', 'gtceu:dust.molybdenum', 'gtceu:dust.stone', 'stone_molybdenite')
            Macerator('kubejs:chunk.powellite_stone', '2x gtceu:crushed.powellite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_powellite')
            //Soapstone
            //Talc
            //Scheelite
            //Tungstate
            //Lithium
    //Diorite
        //String
            //Bauxite
            //Aluminium
            //Ilmenite
            //Chalcopyrite
            //Cassiterite
            Macerator('kubejs:chunk.alunite', '6x gtceu:crushed.alunite', 'gtceu:dust.alunite', 'gtceu:dust.stone', 'stone_alunite')
            //Quartzite
            //Barite
            //Certus Quartz
            //Tin
        //Bronze
            //Bornite
            //Chalcocite
            //Copper
            //Galena
            //Lead
            //Silver
            //Lazurite
            //Sodalite
            //Lapis
            //Calcite
        //Steel
            //Yellow Limonite
            //Malachite
            //Pitchblende
            //Uraninite
            //Kyanite
            //Mica
            //Cassiterite
            //Pollucite
        //Aluminium
            //Graphite
            //Diamond
            //Coal
            //Soapstone
            //Talc
            //Pentlandite
    //Netherrack
        //Bronze
            Macerator('kubejs:chunk.chalcopyrite_nether', '4x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.netherrack', 'nether_chalcopyrite')
            Macerator('kubejs:chunk.iron_nether', '4x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.netherrack', 'nether_iron')
            Macerator('kubejs:chunk.pyrite_nether', '4x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_pyrite')
            Macerator('kubejs:chunk.copper_nether', '4x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.netherrack', 'nether_copper')
            Macerator('kubejs:chunk.yellow_limonite_nether', '4x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.netherrack', 'nether_yellow_limonite')
            Macerator('kubejs:chunk.malachite_nether', '4x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.netherrack', 'nether_malachite')
            Macerator('kubejs:chunk.magnetite_nether', '4x gtceu:crushed.magnetite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_magnetite')
            Macerator('kubejs:chunk.vanadium_magnetite_nether', '4x gtceu:crushed.vanadium_magnetite', 'gtceu:dust.magnetite', 'gtceu:dust.netherrack', 'nether_vanadium_magnetite')
            Macerator('kubejs:chunk.gold_nether', '4x gtceu:crushed.gold', 'gtceu:dust.copper', 'gtceu:dust.netherrack', 'nether_gold')
            Macerator('kubejs:chunk.nether_quartz_nether', '8x gtceu:crushed.nether_quartz', 'gtceu:gem.quartzite', 'gtceu:dust.netherrack', 'nether_nether_quartz')
            Macerator('kubejs:chunk.sulfur_nether', '4x gtceu:crushed.sulfur', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_sulfur')
            Macerator('kubejs:chunk.sphalerite_nether', '4x gtceu:crushed.sphalerite', 'gtceu:gem.yellow_garnet', 'gtceu:dust.netherrack', 'nether_sphalerite')
            Macerator('kubejs:chunk.tetrahedrite_nether', '4x gtceu:crushed.tetrahedrite', 'gtceu:dust.antimony', 'gtceu:dust.netherrack', 'nether_tetrahedrite')
            Macerator('kubejs:chunk.stibnite_nether', '4x gtceu:crushed.stibnite', 'gtceu:dust.antimony_trioxide', 'gtceu:dust.netherrack', 'nether_stibnite')
        //Aluminium
            Macerator('kubejs:chunk.garnierite_nether', '4x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_garnierite')
            Macerator('kubejs:chunk.nickel_nether', '4x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.netherrack', 'nether_nickel')
            Macerator('kubejs:chunk.cobaltite_nether', '4x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_cobaltite')
            Macerator('kubejs:chunk.pentlandite_nether', '4x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_pentlandite')
            Macerator('kubejs:chunk.redstone_nether', '20x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.netherrack', 'nether_redstone')
            Macerator('kubejs:chunk.ruby_nether', '4x gtceu:crushed.ruby', 'gtceu:dust.chromium', 'gtceu:dust.netherrack', 'nether_ruby')
            Macerator('kubejs:chunk.cinnabar_nether', '4x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.netherrack', 'nether_cinnabar')
            Macerator('kubejs:chunk.chromite_nether', '4x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_chromite')
            Macerator('kubejs:chunk.electrotine_nether', '20x gtceu:crushed.electrotine', 'minecraft:redstone', 'gtceu:dust.netherrack', 'nether_electrotine')
            Macerator('kubejs:chunk.topaz_nether', '4x gtceu:crushed.topaz', 'gtceu:gem.blue_topaz', 'gtceu:dust.netherrack', 'nether_topaz')
            Macerator('kubejs:chunk.blue_topaz_nether', '8x gtceu:crushed.blue_topaz', 'gtceu:gem.topaz', 'gtceu:dust.netherrack', 'nether_blue_topaz')
    //Endstone
        //Bronze
            Macerator('kubejs:chunk.beryllium_end', '4x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.endstone', 'endstone_beryllium')
            Macerator('kubejs:chunk.emerald_end', '8x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.endstone', 'endstone_emerald')
            Macerator('kubejs:chunk.thorium_end', '4x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.endstone', 'endstone_thorium')
        //Steel
            Macerator('kubejs:chunk.grossular_end', '12x gtceu:crushed.grossular', 'gtceu:gem.yellow_garnet', 'gtceu:dust.endstone', 'endstone_grossular')
            Macerator('kubejs:chunk.spessartine_end', '12x gtceu:crushed.spessartine', 'gtceu:gem.red_garnet', 'gtceu:dust.endstone', 'endstone_spessartine')
            Macerator('kubejs:chunk.pyrolusite_end', '4x gtceu:crushed.pyrolusite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_pyrolusite')
            Macerator('kubejs:chunk.tantalite_end', '4x gtceu:crushed.tantalite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_tantalite')
            Macerator('kubejs:chunk.wulfenite_end', '4x gtceu:crushed.wulfenite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_wulfenite')
            Macerator('kubejs:chunk.molybdenite_end', '4x gtceu:crushed.molybdenite', 'gtceu:dust.molybdenum', 'gtceu:dust.endstone', 'endstone_molybdenite')
            Macerator('kubejs:chunk.powellite_end', '4x gtceu:crushed.powellite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_powellite')
            Macerator('kubejs:chunk.garnierite_end', '4x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_garnierite')
            Macerator('kubejs:chunk.nickel_end', '4x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.endstone', 'endstone_nickel')
            Macerator('kubejs:chunk.cobaltite_end', '4x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.endstone', 'endstone_cobaltite')
            Macerator('kubejs:chunk.pentlandite_end', '4x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_pentlandite')
            Macerator('kubejs:chunk.bentonite_end', '12x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.endstone', 'endstone_bentonite')
            Macerator('kubejs:chunk.magnesite_end', '4x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.endstone', 'endstone_magnesite')
            Macerator('kubejs:chunk.olivine_end', '8x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.endstone', 'endstone_olivine')
            Macerator('kubejs:chunk.chromite_end', '4x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_chromite')
            Macerator('kubejs:chunk.sheldonite_end', '4x gtceu:crushed.cooperite', 'gtceu:dust.nickel', 'gtceu:dust.endstone', 'endstone_sheldonite')
            Macerator('kubejs:chunk.palladium_end', '4x gtceu:crushed.palladium', 'gtceu:dust.palladium', 'gtceu:dust.endstone', 'endstone_palladium')
            Macerator('kubejs:chunk.scheelite_end', '4x gtceu:crushed.scheelite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_scheelite')
            Macerator('kubejs:chunk.tungstate_end', '4x gtceu:crushed.tungstate', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_tungstate')
            Macerator('kubejs:chunk.lithium_end', '4x gtceu:crushed.lithium', 'gtceu:dust.lithium', 'gtceu:dust.endstone', 'endstone_lithium')
        //Aluminium
            Macerator('kubejs:chunk.naquadah_end', '4x gtceu:crushed.naquadah', 'gtceu:dust.sulfur', 'gtceu:dust.endstone', 'endstone_naquadah')
            Macerator('kubejs:chunk.lazurite_end', '24x gtceu:crushed.lazurite', 'gtceu:gem.sodalite', 'gtceu:dust.endstone', 'endstone_lazurite')
            Macerator('kubejs:chunk.sodalite_end', '24x gtceu:crushed.sodalite', 'gtceu:gem.lazurite', 'gtceu:dust.endstone', 'endstone_sodalite')
            Macerator('kubejs:chunk.lapis_end', '24x gtceu:crushed.lapis', 'gtceu:gem.lazurite', 'gtceu:dust.endstone', 'endstone_lapis')
            Macerator('kubejs:chunk.calcite_end', '4x gtceu:crushed.calcite', 'gtceu:dust.calcium', 'gtceu:dust.endstone', 'endstone_calcite')
})