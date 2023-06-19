ServerEvents.recipes(event => {
    function ForgeHammer(Ore, Crushed, ID){
        event.recipes.gtceu.forge_hammer(`gtceu:forge_hammer/hammer_${ID}_ore_chunk_to_crushed_ore`)
        .itemInputs(Ore)
        .itemOutputs(Crushed)
        .duration(10)
        .EUt(16)   
    }
    //Gravel
        //String
            ForgeHammer('gregicsifting:chunk.gypsum_stone', '1x gtceu:crushed.gypsum', 'stone_gypsum')
            ForgeHammer('gregicsifting:chunk.spodumene_stone', '1x gtceu:crushed.spodumene', 'stone_spodumene')
            ForgeHammer('gregicsifting:chunk.cassiterite_stone', '2x gtceu:crushed.cassiterite', 'stone_cassiterite')
            ForgeHammer('gregicsifting:chunk.coal_stone', '2x gtceu:crushed.coal', 'stone_coal')
            ForgeHammer('gregicsifting:chunk.trona_stone', '2x gtceu:crushed.trona', 'stone_trona')
            ForgeHammer('gregicsifting:chunk.fullers_earth_stone', '2x gtceu:crushed.fullers_earth', 'stone_fullers_earth')
            ForgeHammer('gregicsifting:chunk.basaltic_mineral_stone', '1x gtceu:crushed.basaltic_mineral_sand', 'stone_basaltic_mineral_sand')
            ForgeHammer('gregicsifting:chunk.salt_stone', '2x gtceu:crushed.salt', 'stone_salt')
            ForgeHammer('gregicsifting:chunk.granitic_mineral_stone', '1x gtceu:crushed.granitic_mineral_sand', 'stone_granitic_mineral_sand')
            ForgeHammer('gregicsifting:chunk.tin_stone', '1x gtceu:crushed.tin', 'stone_tin')
            ForgeHammer('gregicsifting:chunk.rock_salt_stone', '2x gtceu:crushed.rock_salt', 'stone_rock_salt')
            ForgeHammer('gregicsifting:chunk.lepidolite_stone', '2x gtceu:crushed.lepidolite', 'stone_lepidolite')
        //Bronze
            ForgeHammer('gregicsifting:chunk.galena_stone', '1x gtceu:crushed.galena', 'stone_galena')
            ForgeHammer('gregicsifting:chunk.lead_stone', '1x gtceu:crushed.lead', 'stone_lead')
            ForgeHammer('gregicsifting:chunk.silver_stone', '1x gtceu:crushed.silver', 'stone_silver')
            ForgeHammer('gregicsifting:chunk.zeolite_stone', '3x gtceu:crushed.zeolite', 'stone_zeolite')
            ForgeHammer('gregicsifting:chunk.glauconite_sand_stone', '3x gtceu:crushed.glauconite_sand', 'stone_glauconite_sand')
            ForgeHammer('gregicsifting:chunk.oilsands_stone', '1x gtceu:crushed.oilsands', 'stone_oilsands')
            ForgeHammer('gregicsifting:chunk.garnet_sand_stone', '1x gtceu:crushed.garnet_sand', 'stone_garnet_sand')
            ForgeHammer('gregicsifting:chunk.asbestos_stone', '3x gtceu:crushed.asbestos', 'stone_asbestos')
            ForgeHammer('gregicsifting:chunk.diatomite_stone', '1x gtceu:crushed.diatomite', 'stone_diatomite')
        //Steel
            ForgeHammer('gregicsifting:chunk.platinum_stone', '1x gtceu:crushed.platinum', 'stone_platinum')
            ForgeHammer('gregicsifting:chunk.palladium_stone', '1x gtceu:crushed.palladium', 'stone_palladium')
    //Sand
        //Bronze
            ForgeHammer('gregicsifting:chunk.copper_sand', 'gtceu:crushed.copper', 'sand_copper')
            ForgeHammer('gregicsifting:chunk.redstone_sand', '5x gtceu:crushed.redstone', 'sand_redstone')
            ForgeHammer('gregicsifting:chunk.cinnabar_sand', 'gtceu:gem.cinnabar', 'sand_cinnabar')
            ForgeHammer('gregicsifting:chunk.chromite_sand', 'gtceu:crushed.chromite', 'sand_chromite')
            ForgeHammer('gregicsifting:chunk.pyrope_sand', '3x gtceu:gem.pyrope', 'sand_pyrope')
            ForgeHammer('gregicsifting:chunk.sapphire_sand', 'gtceu:gem.sapphire', 'sand_sapphire')
            ForgeHammer('gregicsifting:chunk.green_sapphire_sand', 'gtceu:gem.green_sapphire', 'sand_green_sapphire')
        //Steel
            ForgeHammer('gregicsifting:chunk.chalcopyrite_sand', 'gtceu:crushed.chalcopyrite', 'sand_chalcopyrite')
            ForgeHammer('gregicsifting:chunk.iron_sand', 'gtceu:crushed.iron', 'sand_iron')
            ForgeHammer('gregicsifting:chunk.pyrite_sand', 'gtceu:crushed.pyrite', 'sand_pyrite')
            ForgeHammer('gregicsifting:chunk.yellow_limonite_sand', 'gtceu:crushed.yellow_limonite', 'sand_yellow_limonite')
            ForgeHammer('gregicsifting:chunk.malachite_sand', 'gtceu:crushed.malachite', 'sand_malachite')
            ForgeHammer('gregicsifting:chunk.garnierite_sand', 'gtceu:crushed.garnierite', 'sand_garnierite')
            ForgeHammer('gregicsifting:chunk.nickel_sand', 'gtceu:crushed.nickel', 'sand_nickel')
            ForgeHammer('gregicsifting:chunk.cobaltite_sand', 'gtceu:crushed.cobaltite', 'sand_cobaltite')
            ForgeHammer('gregicsifting:chunk.pentlandite_sand', 'gtceu:crushed.pentlandite', 'sand_pentlandite')
            ForgeHammer('gregicsifting:chunk.bentonite_sand', 'gtceu:crushed.bentonite', 'sand_bentonite')
            ForgeHammer('gregicsifting:chunk.magnesite_sand', 'gtceu:crushed.magnesite', 'sand_magnesite')
            ForgeHammer('gregicsifting:chunk.olivine_sand', '2x gtceu:gem.olivine', 'sand_olivine')
        //Aluminium
            ForgeHammer('gregicsifting:chunk.beryllium_sand', 'gtceu:crushed.beryllium', 'sand_beryllium')
            ForgeHammer('gregicsifting:chunk.emerald_sand', '2x gtceu:crushed.emerald', 'sand_emerald')
            ForgeHammer('gregicsifting:chunk.thorium_sand', 'gtceu:crushed.thorium', 'sand_thorium')
            ForgeHammer('gregicsifting:chunk.grossular_sand', '3x gtceu:gem.grossular', 'sand_grossular')
            ForgeHammer('gregicsifting:chunk.spessartine_sand', '3x gtceu:gem.spessartine', 'sand_spessartine')
            ForgeHammer('gregicsifting:chunk.pyrolusite_sand', 'gtceu:crushed.pyrolusite', 'sand_pyrolusite')
            ForgeHammer('gregicsifting:chunk.tantalite_sand', 'gtceu:crushed.tantalite', 'sand_tantalite')
    //Andesite
        //Bronze
            ForgeHammer('gregicsifting:chunk.redstone_stone', '5x gtceu:crushed.redstone', 'stone_redstone')
            ForgeHammer('gregicsifting:chunk.ruby_stone', 'gtceu:gem.ruby', 'stone_ruby')
            ForgeHammer('gregicsifting:chunk.cinnabar_stone', 'gtceu:gem.cinnabar', 'stone_cinnabar')
            ForgeHammer('gregicsifting:chunk.chromite_stone', 'gtceu:crushed.chromite', 'stone_chromite')
            ForgeHammer('gregicsifting:chunk.almandine_stone', '3x gtceu:gem.almandine', 'stone_almandine')
            ForgeHammer('gregicsifting:chunk.pyrope_stone', '3x gtceu:gem.pyrope', 'stone_pyrope')
            ForgeHammer('gregicsifting:chunk.sapphire_stone', 'gtceu:gem.sapphire', 'stone_sapphire')
            ForgeHammer('gregicsifting:chunk.green_sapphire_stone', 'gtceu:gem.green_sapphire', 'stone_green_sapphire')
            ForgeHammer('gregicsifting:chunk.topaz_stone', 'gtceu:gem.topaz', 'stone_topaz')
            ForgeHammer('gregicsifting:chunk.blue_topaz_stone', '2x gtceu:gem.blue_topaz', 'stone_blue_topaz')
        //Steel
            ForgeHammer('gregicsifting:chunk.chalcopyrite_stone', 'gtceu:crushed.chalcopyrite', 'stone_chalcopyrite')
            ForgeHammer('gregicsifting:chunk.iron_stone', 'gtceu:crushed.iron', 'stone_iron')
            ForgeHammer('gregicsifting:chunk.pyrite_stone', 'gtceu:crushed.pyrite', 'stone_pyrite')
            ForgeHammer('gregicsifting:chunk.yellow_limonite_stone', 'gtceu:crushed.yellow_limonite', 'stone_yellow_limonite')
            ForgeHammer('gregicsifting:chunk.malachite_stone', 'gtceu:crushed.malachite', 'stone_malachite')
            ForgeHammer('gregicsifting:chunk.bastnasite_stone', '2x gtceu:crushed.bastnasite', 'stone_bastnasite')
            ForgeHammer('gregicsifting:chunk.monazite_stone', '4x gtceu:gem.monazite', 'stone_monazite')
            ForgeHammer('gregicsifting:chunk.neodymium_stone', 'gtceu:crushed.neodymium', 'stone_neodymium')
            ForgeHammer('gregicsifting:chunk.garnierite_stone', 'gtceu:crushed.garnierite', 'stone_garnierite')
            ForgeHammer('gregicsifting:chunk.nickel_stone', 'gtceu:crushed.nickel', 'stone_nickel')
            ForgeHammer('gregicsifting:chunk.cobaltite_stone', 'gtceu:crushed.cobaltite', 'stone_cobaltite')
            ForgeHammer('gregicsifting:chunk.pentlandite_stone', 'gtceu:crushed.pentlandite', 'stone_pentlandite')
            ForgeHammer('gregicsifting:chunk.bentonite_stone', 'gtceu:crushed.bentonite', 'stone_bentonite')
            ForgeHammer('gregicsifting:chunk.magnesite_stone', 'gtceu:crushed.magnesite', 'stone_magnesite')
            ForgeHammer('gregicsifting:chunk.olivine_stone', '2x gtceu:gem.olivine', 'stone_olivine')
            ForgeHammer('gregicsifting:chunk.pitchblende_stone', 'gtceu:crushed.pitchblende', 'stone_pitchblende')
            ForgeHammer('gregicsifting:chunk.uraninite_stone', 'gtceu:crushed.uraninite', 'stone_uraninite')
            ForgeHammer('gregicsifting:chunk.graphite_stone', 'gtceu:crushed.graphite', 'stone_graphite')
            ForgeHammer('gregicsifting:chunk.diamond_stone', 'gtceu:crushed.diamond', 'stone_diamond')
            //coal on line - 117
        //Aluminium
            ForgeHammer('gregicsifting:chunk.beryllium_stone', 'gtceu:crushed.beryllium', 'stone_beryllium')
            ForgeHammer('gregicsifting:chunk.emerald_stone', '2x gtceu:crushed.emerald', 'stone_emerald')
            ForgeHammer('gregicsifting:chunk.thorium_stone', 'gtceu:crushed.thorium', 'stone_thorium')
            ForgeHammer('gregicsifting:chunk.soapstone_stone', '3x gtceu:crushed.soapstone', 'stone_soapstone')
            ForgeHammer('gregicsifting:chunk.talc_stone', '2x gtceu:crushed.talc ', 'stone_talc')
            ForgeHammer('gregicsifting:chunk.scheelite_stone', 'gtceu:crushed.scheelite', 'stone_scheelite')
            ForgeHammer('gregicsifting:chunk.tungstate_stone', 'gtceu:crushed.tungstate', 'stone_tungstate')
            ForgeHammer('gregicsifting:chunk.lithium_stone', 'gtceu:crushed.lithium', 'stone_lithium')
    //Granite
        //String
            ForgeHammer('gregicsifting:chunk.apatite_stone', '4x gtceu:gem.apatite', 'stone_apatite')
            ForgeHammer('gregicsifting:chunk.tricalcium_phosphate_stone', '3x gtceu:crushed.tricalcium_phosphate', 'stone_tricalcium_phosphate')
            ForgeHammer('gregicsifting:chunk.bauxite_stone', 'gtceu:crushed.bauxite', 'stone_bauxite')
            ForgeHammer('gregicsifting:chunk.aluminium_stone', 'gtceu:crushed.aluminium', 'stone_aluminium')
            ForgeHammer('gregicsifting:chunk.ilmenite_stone', 'gtceu:crushed.ilmenite', 'stone_ilmenite')
            ForgeHammer('gregicsifting:chunk.magnetite_stone', 'gtceu:crushed.magnetite', 'stone_magnetite')
            //Iron
            ForgeHammer('gregicsifting:chunk.vanadium_magnetite_stone', 'gtceu:crushed.vanadium_magnetite', 'stone_vanadium_magnetite')
            ForgeHammer('gregicsifting:chunk.gold_stone', 'gtceu:crushed.gold', 'stone_gold')
            ForgeHammer('gregicsifting:chunk.quartzite_stone', '2x gtceu:gem.quartzite', 'stone_quartzite')
            ForgeHammer('gregicsifting:chunk.barite_stone', 'gtceu:crushed.barite', 'stone_barite')
            ForgeHammer('gregicsifting:chunk.certus_quartz_stone', '2x gtceu:gem.certus_quartz', 'stone_certus_quartz')
            ForgeHammer('gregicsifting:chunk.tetrahedrite_stone', 'gtceu:crushed.tetrahedrite', 'stone_tetrahedrite')
            //Copper
            ForgeHammer('gregicsifting:chunk.stibnite_stone', 'gtceu:crushed.stibnite', 'stone_stibnite')
        //Bronze
            //Redstone
            //Ruby
            //Cinnabar
            //Chromite
            ForgeHammer('gregicsifting:chunk.bornite_stone', 'gtceu:crushed.bornite', 'stone_bornite')
            ForgeHammer('gregicsifting:chunk.chalcocite_stone', 'gtceu:crushed.chalcocite', 'stone_chalcocite')
            ForgeHammer('gregicsifting:chunk.lazurite_stone', '6x gtceu:gem.lazurite', 'stone_lazurite')
            ForgeHammer('gregicsifting:chunk.sodalite_stone', '6x gtceu:gem.sodalite', 'stone_sodalite')
            ForgeHammer('gregicsifting:chunk.lapis_stone', '6x gtceu:crushed.lapis', 'stone_lapis')
            ForgeHammer('gregicsifting:chunk.calcite_stone', 'gtceu:crushed.calcite', 'stone_calcite')
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
            ForgeHammer('gregicsifting:chunk.kyanite_stone', 'gtceu:crushed.kyanite', 'stone_kyanite')
            ForgeHammer('gregicsifting:chunk.mica_stone', '2x gtceu:crushed.mica', 'stone_mica')
            //Cassiterite
            ForgeHammer('gregicsifting:chunk.pollucite_stone', 'gtceu:crushed.pollucite', 'stone_pollucite')
        //Aluminium
            //Graphite
            //Diamond
            //Coal
            ForgeHammer('gregicsifting:chunk.wulfenite_stone', 'gtceu:crushed.wulfenite', 'stone_wulfenite')
            ForgeHammer('gregicsifting:chunk.molybdenite_stone', 'gtceu:crushed.molybdenite', 'stone_molybdenite')
            ForgeHammer('gregicsifting:chunk.powellite_stone', 'gtceu:crushed.powellite', 'stone_powellite')
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
            ForgeHammer('gregicsifting:chunk.alunite_stone', '3x gtceu:crushed.alunite', 'stone_alunite')
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
            ForgeHammer('gregicsifting:chunk.chalcopyrite_nether', '2x gtceu:crushed.chalcopyrite', 'nether_chalcopyrite')
            ForgeHammer('gregicsifting:chunk.iron_nether', '2x gtceu:crushed.iron', 'nether_iron')
            ForgeHammer('gregicsifting:chunk.pyrite_nether', '2x gtceu:crushed.pyrite', 'nether_pyrite')
            ForgeHammer('gregicsifting:chunk.copper_nether', '2x gtceu:crushed.copper', 'nether_copper')
            ForgeHammer('gregicsifting:chunk.yellow_limonite_nether', '2x gtceu:crushed.yellow_limonite', 'nether_yellow_limonite')
            ForgeHammer('gregicsifting:chunk.malachite_nether', '2x gtceu:crushed.malachite', 'nether_malachite')
            ForgeHammer('gregicsifting:chunk.magnetite_nether', '2x gtceu:crushed.magnetite', 'nether_magnetite')
            ForgeHammer('gregicsifting:chunk.vanadium_magnetite_nether', '2x gtceu:crushed.vanadium_magnetite', 'nether_vanadium_magnetite')
            ForgeHammer('gregicsifting:chunk.gold_nether', '2x gtceu:crushed.gold', 'nether_gold')
            ForgeHammer('gregicsifting:chunk.nether_quartz_nether', '4x gtceu:crushed.nether_quartz', 'nether_nether_quartz')
            ForgeHammer('gregicsifting:chunk.sulfur_nether', '2x gtceu:crushed.sulfur', 'nether_sulfur')
            ForgeHammer('gregicsifting:chunk.sphalerite_nether', '2x gtceu:crushed.sphalerite', 'nether_sphalerite')
            ForgeHammer('gregicsifting:chunk.tetrahedrite_nether', '2x gtceu:crushed.tetrahedrite', 'nether_tetrahedrite')
            ForgeHammer('gregicsifting:chunk.stibnite_nether', '2x gtceu:crushed.stibnite', 'nether_stibnite')
        //Aluminium
            ForgeHammer('gregicsifting:chunk.garnierite_nether', '2x gtceu:crushed.garnierite', 'nether_garnierite')
            ForgeHammer('gregicsifting:chunk.nickel_nether', '2x gtceu:crushed.nickel', 'nether_nickel')
            ForgeHammer('gregicsifting:chunk.cobaltite_nether', '2x gtceu:crushed.cobaltite', 'nether_cobaltite')
            ForgeHammer('gregicsifting:chunk.pentlandite_nether', '2x gtceu:crushed.pentlandite', 'nether_pentlandite')
            ForgeHammer('gregicsifting:chunk.redstone_nether', '10x gtceu:crushed.redstone', 'nether_redstone')
            ForgeHammer('gregicsifting:chunk.ruby_nether', '2x gtceu:gem.ruby', 'nether_ruby')
            ForgeHammer('gregicsifting:chunk.cinnabar_nether', '2x gtceu:gem.cinnabar', 'nether_cinnabar')
            ForgeHammer('gregicsifting:chunk.chromite_nether', '2x gtceu:crushed.chromite', 'nether_chromite')
            ForgeHammer('gregicsifting:chunk.electrotine_nether', '10x gtceu:crushed.electrotine', 'nether_electrotine')
            ForgeHammer('gregicsifting:chunk.topaz_nether', '2x gtceu:gem.topaz', 'nether_topaz')
            ForgeHammer('gregicsifting:chunk.blue_topaz_nether', '2x gtceu:gem.blue_topaz', 'nether_blue_topaz')
    //Endstone
        //Bronze
            ForgeHammer('gregicsifting:chunk.emerald_end', '2x gtceu:crushed.emerald', 'end_emerald')
            ForgeHammer('gregicsifting:chunk.emerald_end', '4x gtceu:crushed.emerald', 'end_emerald')
            ForgeHammer('gregicsifting:chunk.thorium_end', '2x gtceu:crushed.thorium', 'end_thorium')
        //Steel
            ForgeHammer('gregicsifting:chunk.grossular_end', '6x gtceu:gem.grossular', 'end_grossular')
            ForgeHammer('gregicsifting:chunk.spessartine_end', '6x gtceu:gem.spessartine', 'end_spessartine')
            ForgeHammer('gregicsifting:chunk.pyrolusite_end', '2x gtceu:crushed.pyrolusite', 'end_pyrolusite')
            ForgeHammer('gregicsifting:chunk.tantalite_end', '2x gtceu:crushed.tantalite', 'end_tantalite')
            ForgeHammer('gregicsifting:chunk.wulfenite_end', '2x gtceu:crushed.wulfenite', 'end_wulfenite')
            ForgeHammer('gregicsifting:chunk.molybdenite_end', '2x gtceu:crushed.molybdenite', 'end_molybdenite')
            ForgeHammer('gregicsifting:chunk.powellite_end', '2x gtceu:crushed.powellite', 'end_powellite')
            ForgeHammer('gregicsifting:chunk.garnierite_end', '2x gtceu:crushed.garnierite', 'end_garnierite')
            ForgeHammer('gregicsifting:chunk.nickel_end', '2x gtceu:crushed.nickel', 'end_nickel')
            ForgeHammer('gregicsifting:chunk.cobaltite_end', '2x gtceu:crushed.cobaltite', 'end_cobaltite')
            ForgeHammer('gregicsifting:chunk.pentlandite_end', '2x gtceu:crushed.pentlandite', 'end_pentlandite')
            ForgeHammer('gregicsifting:chunk.bentonite_end', '6x gtceu:crushed.bentonite', 'end_bentonite')
            ForgeHammer('gregicsifting:chunk.magnesite_end', '2x gtceu:crushed.magnesite', 'end_magnesite')
            ForgeHammer('gregicsifting:chunk.olivine_end', '4x gtceu:gem.olivine', 'end_olivine')
            ForgeHammer('gregicsifting:chunk.chromite_end', '2x gtceu:crushed.chromite', 'end_chromite')
            ForgeHammer('gregicsifting:chunk.sheldonite_end', '2x gtceu:crushed.cooperite', 'end_sheldonite')
            ForgeHammer('gregicsifting:chunk.palladium_end', '2x gtceu:crushed.palladium', 'end_palladium')
            ForgeHammer('gregicsifting:chunk.scheelite_end', '2x gtceu:crushed.scheelite', 'end_scheelite')
            ForgeHammer('gregicsifting:chunk.tungstate_end', '2x gtceu:crushed.tungstate', 'end_tungstate')
            ForgeHammer('gregicsifting:chunk.lithium_end', '2x gtceu:crushed.lithium', 'end_lithium')
        //Aluminium
            ForgeHammer('gregicsifting:chunk.naquadah_end', '2x gtceu:crushed.naquadah', 'end_naquadah')
            ForgeHammer('gregicsifting:chunk.lazurite_end', '12x gtceu:gem.lazurite', 'end_lazurite')
            ForgeHammer('gregicsifting:chunk.sodalite_end', '12x gtceu:gem.sodalite', 'end_sodalite')
            ForgeHammer('gregicsifting:chunk.lapis_end', '12x minecraft:lapis_lazuli', 'end_lapis')
            ForgeHammer('gregicsifting:chunk.calcite_end', '2x gtceu:crushed.calcite', 'end_calcite')
})
