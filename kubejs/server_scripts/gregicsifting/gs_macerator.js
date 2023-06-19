ServerEvents.recipes(event => {
    function Macerator(Ore, Crushed, Byproduct, Dust, ID){
        event.recipes.gtceu.macerator(`gtceu:macerate_${ID}_ore_chunk_to_crushed_ore`)
        .itemInputs(Ore)
        .itemOutputs(Crushed, Dust)
        .chancedOutput(Byproduct, 1400, 850)
        .duration(400)
        .EUt(2)  
    }
    //Gravel
        //String
            Macerator('gregicsifting:chunk.gypsum_stone', '2x gtceu:crushed.gypsum', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_gypsum')
            Macerator('gregicsifting:chunk.spodumene_stone', '2x gtceu:crushed.spodumene', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_spodumene')
            Macerator('gregicsifting:chunk.cassiterite_stone', '4x gtceu:crushed.cassiterite', 'gtceu:dust.tin', 'gtceu:dust.stone', 'stone_cassiterite')
            Macerator('gregicsifting:chunk.coal_stone', '4x gtceu:crushed.coal', 'minecraft:coal', 'gtceu:dust.stone', 'stone_coal')
            Macerator('gregicsifting:chunk.trona_stone', '4x gtceu:crushed.trona', 'gtceu:dust.sodium', 'gtceu:dust.stone', 'stone_trona')
            Macerator('gregicsifting:chunk.fullers_earth_stone', '4x gtceu:crushed.fullers_earth', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_fullers_earth')
            Macerator('gregicsifting:chunk.basaltic_mineral_stone', '2x gtceu:crushed.basaltic_mineral_sand', 'gtceu:dust.basalt', 'gtceu:dust.stone', 'stone_basaltic_mineral_sand')
            Macerator('gregicsifting:chunk.salt_stone', '4x gtceu:crushed.salt', 'gtceu:gem.rock_salt', 'gtceu:dust.stone', 'stone_salt')
            Macerator('gregicsifting:chunk.granitic_mineral_stone', '2x gtceu:crushed.granitic_mineral_sand', 'gtceu:dust.deepslate', 'gtceu:dust.stone', 'stone_granitic_mineral_sand')
            Macerator('gregicsifting:chunk.tin_stone', '2x gtceu:crushed.tin', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_tin')
            Macerator('gregicsifting:chunk.rock_salt_stone', '4x gtceu:crushed.rock_salt', 'gtceu:gem.salt', 'gtceu:dust.stone', 'stone_rock_salt')
            Macerator('gregicsifting:chunk.lepidolite_stone', '4x gtceu:crushed.lepidolite', 'gtceu:dust.lithium', 'gtceu:dust.stone', 'stone_lepidolite')
        //Bronze
            Macerator('gregicsifting:chunk.galena_stone', '2x gtceu:crushed.galena', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_galena')
            Macerator('gregicsifting:chunk.lead_stone', '2x gtceu:crushed.lead', 'gtceu:dust.silver', 'gtceu:dust.stone', 'stone_lead')
            Macerator('gregicsifting:chunk.silver_stone', '2x gtceu:crushed.silver', 'gtceu:dust.lead', 'gtceu:dust.stone', 'stone_silver')
            Macerator('gregicsifting:chunk.zeolite_stone', '6x gtceu:crushed.zeolite', 'gtceu:dust.calcium', 'gtceu:dust.stone', 'stone_zeolite')
            Macerator('gregicsifting:chunk.glauconite_sand_stone', '6x gtceu:crushed.glauconite_sand', 'gtceu:dust.sodium', 'gtceu:dust.stone', 'stone_glauconite_sand')
            Macerator('gregicsifting:chunk.oilsands_stone', '2x gtceu:crushed.oilsands', 'gtceu:dust.oilsands', 'gtceu:dust.stone', 'stone_oilsands')
            Macerator('gregicsifting:chunk.garnet_sand_stone', '2x gtceu:crushed.garnet_sand', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_garnet_sand')
            Macerator('gregicsifting:chunk.asbestos_stone', '6x gtceu:crushed.asbestos', 'gtceu:dust.diatomite', 'gtceu:dust.stone', 'stone_asbestos')
            Macerator('gregicsifting:chunk.diatomite_stone', '2x gtceu:crushed.diatomite', 'gtceu:dust.hematite', 'gtceu:dust.stone', 'stone_diatomite')
        //Steel
            Macerator('gregicsifting:chunk.platinum_stone', '2x gtceu:crushed.platinum', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_platinum')
            Macerator('gregicsifting:chunk.palladium_stone', '2x gtceu:crushed.palladium', 'gtceu:dust.palladium', 'gtceu:dust.stone', 'stone_palladium')
    //Sand
        //Bronze
            Macerator('gregicsifting:chunk.copper_sand', '2x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'sand_copper')
            Macerator('gregicsifting:chunk.redstone_sand', '10x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.stone', 'sand_redstone')
            Macerator('gregicsifting:chunk.cinnabar_sand', '2x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.stone', 'sand_cinnabar')
            Macerator('gregicsifting:chunk.chromite_sand', '2x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_chromite')
            Macerator('gregicsifting:chunk.pyrope_sand', '6x gtceu:crushed.pyrope', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'sand_pyrope')
            Macerator('gregicsifting:chunk.sapphire_sand', '2x gtceu:crushed.sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_sapphire')
            Macerator('gregicsifting:chunk.green_sapphire_sand', '2x gtceu:crushed.green_sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_green_sapphire')
        //Steel
            Macerator('gregicsifting:chunk.chalcopyrite_sand', '2x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'sand_chalcopyrite')
            Macerator('gregicsifting:chunk.iron_sand', '2x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'sand_iron')
            Macerator('gregicsifting:chunk.pyrite_sand', '2x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'sand_pyrite')
            Macerator('gregicsifting:chunk.yellow_limonite_sand', '2x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'sand_yellow_limonite')
            Macerator('gregicsifting:chunk.malachite_sand', '2x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.stone', 'sand_malachite')
            Macerator('gregicsifting:chunk.garnierite_sand', '2x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_garnierite')
            Macerator('gregicsifting:chunk.nickel_sand', '2x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'sand_nickel')
            Macerator('gregicsifting:chunk.cobaltite_sand', '2x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'sand_cobaltite')
            Macerator('gregicsifting:chunk.pentlandite_sand', '2x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_pentlandite')
            Macerator('gregicsifting:chunk.bentonite_sand', '6x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_bentonite')
            Macerator('gregicsifting:chunk.magnesite_sand', '2x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.stone', 'sand_magnesite')
            Macerator('gregicsifting:chunk.olivine_sand', '4x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.stone', 'sand_olivine')
        //Aluminium
            Macerator('gregicsifting:chunk.beryllium_sand', '2x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.stone', 'sand_beryllium')
            Macerator('gregicsifting:chunk.emerald_sand', '4x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.stone', 'sand_emerald')
            Macerator('gregicsifting:chunk.thorium_sand', '2x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'sand_thorium')
            Macerator('gregicsifting:chunk.grossular_sand', '6x gtceu:crushed.grossular', 'gtceu:gem.yellow_garnet', 'gtceu:dust.stone', 'sand_grossular')
            Macerator('gregicsifting:chunk.spessartine_sand', '6x gtceu:crushed.spessartine', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'sand_spessartine')
            Macerator('gregicsifting:chunk.pyrolusite_sand', '2x gtceu:crushed.pyrolusite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'sand_pyrolusite')
            Macerator('gregicsifting:chunk.tantalite_sand', '2x gtceu:crushed.tantalite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'sand_tantalite')
    //Andesite
        //Bronze
            Macerator('gregicsifting:chunk.redstone_stone', '10x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.stone', 'stone_redstone')
            Macerator('gregicsifting:chunk.ruby_stone', '2x gtceu:crushed.ruby', 'gtceu:dust.chromium', 'gtceu:dust.stone', 'stone_ruby')
            Macerator('gregicsifting:chunk.cinnabar_stone', '2x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.stone', 'stone_cinnabar')
            Macerator('gregicsifting:chunk.chromite_stone', '2x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_chromite')
            Macerator('gregicsifting:chunk.almandine_stone', '6x gtceu:crushed.almandine', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_almandine')
            Macerator('gregicsifting:chunk.pyrope_stone', '6x gtceu:crushed.pyrope', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_pyrope')
            Macerator('gregicsifting:chunk.sapphire_stone', '2x gtceu:crushed.sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_sapphire')
            Macerator('gregicsifting:chunk.green_sapphire_stone', '2x gtceu:crushed.green_sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_green_sapphire')
            Macerator('gregicsifting:chunk.topaz_stone', '2x gtceu:crushed.topaz', 'gtceu:gem.blue_topaz', 'gtceu:dust.stone', 'stone_topaz')
            Macerator('gregicsifting:chunk.blue_topaz_stone', '4x gtceu:crushed.blue_topaz', 'gtceu:gem.topaz', 'gtceu:dust.stone', 'stone_blue_topaz')
        //Steel
            Macerator('gregicsifting:chunk.chalcopyrite_stone', '2x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'stone_chalcopyrite')
            Macerator('gregicsifting:chunk.iron_stone', '2x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_iron')
            Macerator('gregicsifting:chunk.pyrite_stone', '2x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_pyrite')
            Macerator('gregicsifting:chunk.copper_stone', '2x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'stone_copper')
            Macerator('gregicsifting:chunk.yellow_limonite_stone', '2x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_yellow_limonite')
            Macerator('gregicsifting:chunk.malachite_stone', '2x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.stone', 'stone_malachite')
            Macerator('gregicsifting:chunk.bastnasite_stone', '4x gtceu:crushed.bastnasite', 'gtceu:dust.neodymium', 'gtceu:dust.stone', 'stone_bastnasite')
            Macerator('gregicsifting:chunk.monazite_stone', '8x gtceu:crushed.monazite', 'gtceu:dust.thorium', 'gtceu:dust.stone', 'stone_monazite')
            Macerator('gregicsifting:chunk.neodymium_stone', '2x gtceu:crushed.neodymium', 'gtceu:dust.rare_earth', 'gtceu:dust.stone', 'stone_neodymium')
            Macerator('gregicsifting:chunk.garnierite_stone', '2x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_garnierite')
            Macerator('gregicsifting:chunk.nickel_stone', '2x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'stone_nickel')
            Macerator('gregicsifting:chunk.cobaltite_stone', '2x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_cobaltite')
            Macerator('gregicsifting:chunk.pentlandite_stone', '2x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_pentlandite')
            Macerator('gregicsifting:chunk.bentonite_stone', '6x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_bentonite')
            Macerator('gregicsifting:chunk.magnesite_stone', '2x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.stone', 'stone_magnesite')
            Macerator('gregicsifting:chunk.olivine_stone', '4x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.stone', 'stone_olivine')
            Macerator('gregicsifting:chunk.pitchblende_stone', '2x gtceu:crushed.pitchblende', 'gtceu:dust.thorium', 'gtceu:dust.stone', 'stone_pitchblende')
            Macerator('gregicsifting:chunk.uraninite_stone', '2x gtceu:crushed.uraninite', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'stone_uraninite')
            Macerator('gregicsifting:chunk.graphite_stone', '2x gtceu:crushed.graphite', 'gtceu:dust.carbon', 'gtceu:dust.stone', 'stone_graphite')
            Macerator('gregicsifting:chunk.diamond_stone', '2x gtceu:crushed.diamond', 'gtceu:dust.graphite', 'gtceu:dust.stone', 'stone_diamond')
            //Coal is in Line - 16
        //Aluminium
            Macerator('gregicsifting:chunk.beryllium_stone', '2x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.stone', 'stone_beryllium')
            Macerator('gregicsifting:chunk.emerald_stone', '4x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.stone', 'stone_emerald')
            Macerator('gregicsifting:chunk.thorium_stone', '2x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'stone_thorium')
            Macerator('gregicsifting:chunk.soapstone_stone', '6x gtceu:crushed.soapstone', 'gtceu:dust.silicon_dioxide', 'gtceu:dust.stone', 'stone_soapstone')
            Macerator('gregicsifting:chunk.talc_stone', '4x gtceu:crushed.talc', 'gtceu:dust.clay', 'gtceu:dust.stone', 'stone_talc')
            Macerator('gregicsifting:chunk.scheelite_stone', '2x gtceu:crushed.scheelite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'stone_scheelite')
            Macerator('gregicsifting:chunk.tungstate_stone', '2x gtceu:crushed.tungstate', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'stone_tungstate')
            Macerator('gregicsifting:chunk.lithium_stone', '2x gtceu:crushed.lithium', 'gtceu:dust.lithium', 'gtceu:dust.stone', 'stone_lithium')
    //Granite
        //String
            Macerator('gregicsifting:chunk.apatite_stone', '8x gtceu:crushed.apatite', 'gtceu:dust.tricalcium_phosphate', 'gtceu:dust.stone', 'stone_apatite')
            Macerator('gregicsifting:chunk.tricalcium_phosphate_stone', '6x gtceu:crushed.tricalcium_phosphate', 'gtceu:gem.apatite', 'gtceu:dust.stone', 'stone_tricalcium_phosphate')
            Macerator('gregicsifting:chunk.bauxite_stone', '2x gtceu:crushed.bauxite', 'gtceu:gem.grossular', 'gtceu:dust.stone', 'stone_bauxite')
            Macerator('gregicsifting:chunk.aluminium_stone', '2x gtceu:crushed.aluminium', 'gtceu:dust.bauxite', 'gtceu:dust.stone', 'stone_aluminium')
            Macerator('gregicsifting:chunk.ilmenite_stone', '2x gtceu:crushed.ilmenite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_ilmenite')
            Macerator('gregicsifting:chunk.magnetite_stone', '2x gtceu:crushed.magnetite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_magnetite')
            //Iron
            Macerator('gregicsifting:chunk.vanadium_magnetite_stone', '2x gtceu:crushed.vanadium_magnetite', 'gtceu:dust.magnetite', 'gtceu:dust.stone', 'stone_vanadium_magnetite')
            Macerator('gregicsifting:chunk.gold_stone', '2x gtceu:crushed.gold', 'gtceu:dust.copper', 'gtceu:dust.stone', 'stone_gold')
            Macerator('gregicsifting:chunk.quartzite_stone', '4x gtceu:crushed.quartzite', 'gtceu:gem.certus_quartz', 'gtceu:dust.stone', 'stone_quartzite')
            Macerator('gregicsifting:chunk.barite_stone', '2x gtceu:crushed.barite', 'gtceu:dust.barite', 'gtceu:dust.stone', 'stone_barite')
            Macerator('gregicsifting:chunk.certus_quartz_stone', '4x gtceu:crushed.certus_quartz', 'minecraft:quartz', 'gtceu:dust.stone', 'stone_certus_quartz')
            Macerator('gregicsifting:chunk.tetrahedrite_stone', '2x gtceu:crushed.tetrahedrite', 'gtceu:dust.antimony', 'gtceu:dust.stone', 'stone_tetrahedrite')
            //Copper
            Macerator('gregicsifting:chunk.stibnite_stone', '2x gtceu:crushed.stibnite', 'gtceu:dust.antimony_trioxide', 'gtceu:dust.stone', 'stone_stibnite')
        //Bronze
            //Redstone
            //Ruby
            //Cinnabar
            //Chromite
            Macerator('gregicsifting:chunk.bornite_stone', '2x gtceu:crushed.bornite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'stone_bornite')
            Macerator('gregicsifting:chunk.chalcocite_stone', '2x gtceu:crushed.chalcocite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_chalcocite')
            Macerator('gregicsifting:chunk.lazurite_stone', '12x gtceu:crushed.lazurite', 'gtceu:gem.sodalite', 'gtceu:dust.stone', 'stone_lazurite')
            Macerator('gregicsifting:chunk.sodalite_stone', '12x gtceu:crushed.sodalite', 'gtceu:gem.lazurite', 'gtceu:dust.stone', 'stone_sodalite')
            Macerator('gregicsifting:chunk.lapis_stone', '12x gtceu:crushed.lapis', 'gtceu:gem.lazurite', 'gtceu:dust.stone', 'stone_lapis')
            Macerator('gregicsifting:chunk.calcite_stone', '2x gtceu:crushed.calcite', 'gtceu:dust.calcium', 'gtceu:dust.stone', 'stone_calcite')
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
            Macerator('gregicsifting:chunk.kyanite_stone', '2x gtceu:crushed.kyanite', 'gtceu:dust.talc', 'gtceu:dust.stone', 'stone_kyanite')
            Macerator('gregicsifting:chunk.mica_stone', '4x gtceu:crushed.mica', 'gtceu:dust.potassium', 'gtceu:dust.stone', 'stone_mica')
            //Cassiterite
            Macerator('gregicsifting:chunk.pollucite_stone', '2x gtceu:crushed.pollucite', 'gtceu:dust.caesium', 'gtceu:dust.stone', 'stone_pollucite')
        //Aluminium
            //Graphite
            //Diamond
            //Coal
            Macerator('gregicsifting:chunk.wulfenite_stone', '2x gtceu:crushed.wulfenite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_wulfenite')
            Macerator('gregicsifting:chunk.molybdenite_stone', '2x gtceu:crushed.molybdenite', 'gtceu:dust.molybdenum', 'gtceu:dust.stone', 'stone_molybdenite')
            Macerator('gregicsifting:chunk.powellite_stone', '2x gtceu:crushed.powellite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_powellite')
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
            Macerator('gregicsifting:chunk.alunite', '6x gtceu:crushed.alunite', 'gtceu:dust.alunite', 'gtceu:dust.stone', 'stone_alunite')
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
            Macerator('gregicsifting:chunk.chalcopyrite_nether', '4x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.netherrack', 'nether_chalcopyrite')
            Macerator('gregicsifting:chunk.iron_nether', '4x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.netherrack', 'nether_iron')
            Macerator('gregicsifting:chunk.pyrite_nether', '4x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_pyrite')
            Macerator('gregicsifting:chunk.copper_nether', '4x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.netherrack', 'nether_copper')
            Macerator('gregicsifting:chunk.yellow_limonite_nether', '4x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.netherrack', 'nether_yellow_limonite')
            Macerator('gregicsifting:chunk.malachite_nether', '4x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.netherrack', 'nether_malachite')
            Macerator('gregicsifting:chunk.magnetite_nether', '4x gtceu:crushed.magnetite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_magnetite')
            Macerator('gregicsifting:chunk.vanadium_magnetite_nether', '4x gtceu:crushed.vanadium_magnetite', 'gtceu:dust.magnetite', 'gtceu:dust.netherrack', 'nether_vanadium_magnetite')
            Macerator('gregicsifting:chunk.gold_nether', '4x gtceu:crushed.gold', 'gtceu:dust.copper', 'gtceu:dust.netherrack', 'nether_gold')
            Macerator('gregicsifting:chunk.nether_quartz_nether', '8x gtceu:crushed.nether_quartz', 'gtceu:gem.quartzite', 'gtceu:dust.netherrack', 'nether_nether_quartz')
            Macerator('gregicsifting:chunk.sulfur_nether', '4x gtceu:crushed.sulfur', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_sulfur')
            Macerator('gregicsifting:chunk.sphalerite_nether', '4x gtceu:crushed.sphalerite', 'gtceu:gem.yellow_garnet', 'gtceu:dust.netherrack', 'nether_sphalerite')
            Macerator('gregicsifting:chunk.tetrahedrite_nether', '4x gtceu:crushed.tetrahedrite', 'gtceu:dust.antimony', 'gtceu:dust.netherrack', 'nether_tetrahedrite')
            Macerator('gregicsifting:chunk.stibnite_nether', '4x gtceu:crushed.stibnite', 'gtceu:dust.antimony_trioxide', 'gtceu:dust.netherrack', 'nether_stibnite')
        //Aluminium
            Macerator('gregicsifting:chunk.garnierite_nether', '4x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_garnierite')
            Macerator('gregicsifting:chunk.nickel_nether', '4x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.netherrack', 'nether_nickel')
            Macerator('gregicsifting:chunk.cobaltite_nether', '4x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_cobaltite')
            Macerator('gregicsifting:chunk.pentlandite_nether', '4x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_pentlandite')
            Macerator('gregicsifting:chunk.redstone_nether', '20x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.netherrack', 'nether_redstone')
            Macerator('gregicsifting:chunk.ruby_nether', '4x gtceu:crushed.ruby', 'gtceu:dust.chromium', 'gtceu:dust.netherrack', 'nether_ruby')
            Macerator('gregicsifting:chunk.cinnabar_nether', '4x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.netherrack', 'nether_cinnabar')
            Macerator('gregicsifting:chunk.chromite_nether', '4x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_chromite')
            Macerator('gregicsifting:chunk.electrotine_nether', '20x gtceu:crushed.electrotine', 'minecraft:redstone', 'gtceu:dust.netherrack', 'nether_electrotine')
            Macerator('gregicsifting:chunk.topaz_nether', '4x gtceu:crushed.topaz', 'gtceu:gem.blue_topaz', 'gtceu:dust.netherrack', 'nether_topaz')
            Macerator('gregicsifting:chunk.blue_topaz_nether', '8x gtceu:crushed.blue_topaz', 'gtceu:gem.topaz', 'gtceu:dust.netherrack', 'nether_blue_topaz')
    //Endstone
        //Bronze
            Macerator('gregicsifting:chunk.beryllium_end', '4x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.endstone', 'endstone_beryllium')
            Macerator('gregicsifting:chunk.emerald_end', '8x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.endstone', 'endstone_emerald')
            Macerator('gregicsifting:chunk.thorium_end', '4x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.endstone', 'endstone_thorium')
        //Steel
            Macerator('gregicsifting:chunk.grossular_end', '12x gtceu:crushed.grossular', 'gtceu:gem.yellow_garnet', 'gtceu:dust.endstone', 'endstone_grossular')
            Macerator('gregicsifting:chunk.spessartine_end', '12x gtceu:crushed.spessartine', 'gtceu:gem.red_garnet', 'gtceu:dust.endstone', 'endstone_spessartine')
            Macerator('gregicsifting:chunk.pyrolusite_end', '4x gtceu:crushed.pyrolusite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_pyrolusite')
            Macerator('gregicsifting:chunk.tantalite_end', '4x gtceu:crushed.tantalite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_tantalite')
            Macerator('gregicsifting:chunk.wulfenite_end', '4x gtceu:crushed.wulfenite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_wulfenite')
            Macerator('gregicsifting:chunk.molybdenite_end', '4x gtceu:crushed.molybdenite', 'gtceu:dust.molybdenum', 'gtceu:dust.endstone', 'endstone_molybdenite')
            Macerator('gregicsifting:chunk.powellite_end', '4x gtceu:crushed.powellite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_powellite')
            Macerator('gregicsifting:chunk.garnierite_end', '4x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_garnierite')
            Macerator('gregicsifting:chunk.nickel_end', '4x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.endstone', 'endstone_nickel')
            Macerator('gregicsifting:chunk.cobaltite_end', '4x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.endstone', 'endstone_cobaltite')
            Macerator('gregicsifting:chunk.pentlandite_end', '4x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_pentlandite')
            Macerator('gregicsifting:chunk.bentonite_end', '12x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.endstone', 'endstone_bentonite')
            Macerator('gregicsifting:chunk.magnesite_end', '4x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.endstone', 'endstone_magnesite')
            Macerator('gregicsifting:chunk.olivine_end', '8x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.endstone', 'endstone_olivine')
            Macerator('gregicsifting:chunk.chromite_end', '4x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_chromite')
            Macerator('gregicsifting:chunk.sheldonite_end', '4x gtceu:crushed.cooperite', 'gtceu:dust.nickel', 'gtceu:dust.endstone', 'endstone_sheldonite')
            Macerator('gregicsifting:chunk.palladium_end', '4x gtceu:crushed.palladium', 'gtceu:dust.palladium', 'gtceu:dust.endstone', 'endstone_palladium')
            Macerator('gregicsifting:chunk.scheelite_end', '4x gtceu:crushed.scheelite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_scheelite')
            Macerator('gregicsifting:chunk.tungstate_end', '4x gtceu:crushed.tungstate', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_tungstate')
            Macerator('gregicsifting:chunk.lithium_end', '4x gtceu:crushed.lithium', 'gtceu:dust.lithium', 'gtceu:dust.endstone', 'endstone_lithium')
        //Aluminium
            Macerator('gregicsifting:chunk.naquadah_end', '4x gtceu:crushed.naquadah', 'gtceu:dust.sulfur', 'gtceu:dust.endstone', 'endstone_naquadah')
            Macerator('gregicsifting:chunk.lazurite_end', '24x gtceu:crushed.lazurite', 'gtceu:gem.sodalite', 'gtceu:dust.endstone', 'endstone_lazurite')
            Macerator('gregicsifting:chunk.sodalite_end', '24x gtceu:crushed.sodalite', 'gtceu:gem.lazurite', 'gtceu:dust.endstone', 'endstone_sodalite')
            Macerator('gregicsifting:chunk.lapis_end', '24x gtceu:crushed.lapis', 'gtceu:gem.lazurite', 'gtceu:dust.endstone', 'endstone_lapis')
            Macerator('gregicsifting:chunk.calcite_end', '4x gtceu:crushed.calcite', 'gtceu:dust.calcium', 'gtceu:dust.endstone', 'endstone_calcite')
})
