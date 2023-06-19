ServerEvents.recipes(event => {
    let multiSmelt = (output, input, includeBlasting) => {
        event.smelting(output, input).xp(0.7)
        
        if (includeBlasting) {
          event.blasting(output, input).xp(0.7)
        }
      }
        //Gravel
            //String
                multiSmelt('gtceu:dust.gypsum','gregicsifting:chunk.gypsum_stone',true)
                multiSmelt('gtceu:dust.spodumene','gregicsifting:chunk.spodumene_stone',true)
                multiSmelt('2x gtceu:ingot.tin','gregicsifting:chunk.cassiterite_stone',true)
                multiSmelt('2x minecraft:coal','gregicsifting:chunk.coal_stone',true)
                multiSmelt('2x gtceu:dust.trona','gregicsifting:chunk.trona_stone',true)
                multiSmelt('2x gtceu:dust.fullers_earth','gregicsifting:chunk.fullers_earth_stone',true)
                multiSmelt('minecraft:iron_ingot','gregicsifting:chunk.basaltic_mineral_stone',true)
                multiSmelt('2x gtceu:gem.salt','gregicsifting:chunk.salt_stone',true)
                multiSmelt('minecraft:iron_ingot','gregicsifting:chunk.granitic_mineral_stone',true)
                multiSmelt('gtceu:ingot.tin','gregicsifting:chunk.tin_stone',true)
                multiSmelt('2x gtceu:gem.rock_salt','gregicsifting:chunk.rock_salt_stone',true)
                multiSmelt('2x gtceu:dust.lepidolite','gregicsifting:chunk.lepidolite_stone',true)
            //Bronze
                multiSmelt('gtceu:ingot.lead','gregicsifting:chunk.galena_stone',true)
                multiSmelt('gtceu:ingot.lead','gregicsifting:chunk.lead_stone',true)
                multiSmelt('gtceu:ingot.silver','gregicsifting:chunk.silver_stone',true)
                multiSmelt('3x gtceu:dust.zeolite','gregicsifting:chunk.zeolite_stone',true)
                multiSmelt('3x gtceu:dust.glauconite_sand','gregicsifting:chunk.glauconite_sand_stone',true)
                multiSmelt('gtceu:dust.oilsands','gregicsifting:chunk.oilsands_stone',true)
                multiSmelt('gtceu:dust.garnet_sand','gregicsifting:chunk.garnet_sand_stone',true)
                multiSmelt('3x gtceu:dust.asbestos','gregicsifting:chunk.asbestos_stone',true)
                multiSmelt('3x gtceu:dust.diatomite','gregicsifting:chunk.diatomite_stone',true)
            //Steel
                multiSmelt('gtceu:ingot.platinum','gregicsifting:chunk.platinum_stone',true)
        //Sand
            //Bronze
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.copper_sand', true)
                multiSmelt('5x minecraft:redstone', 'gregicsifting:chunk.redstone_sand', true)
                multiSmelt('gtceu:gem.cinnabar', 'gregicsifting:chunk.cinnabar_sand', true)
                multiSmelt('gtceu:dust.chromite', 'gregicsifting:chunk.chromite_sand', true)
                multiSmelt('3x gtceu:gem.pyrope', 'gregicsifting:chunk.pyrope_sand', true)
                multiSmelt('gtceu:gem.sapphire', 'gregicsifting:chunk.sapphire_sand', true)
                multiSmelt('gtceu:gem.green_sapphire', 'gregicsifting:chunk.green_sapphire_sand', true)
            //Steel
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.chalcopyrite_sand', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.iron_sand', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.pyrite_sand', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.yellow_limonite_sand', true)
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.malachite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'gregicsifting:chunk.garnierite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'gregicsifting:chunk.nickel_sand', true)
                multiSmelt('gtceu:ingot.cobalt', 'gregicsifting:chunk.cobaltite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'gregicsifting:chunk.pentlandite_sand', true)
                multiSmelt('3x gtceu:dust.bentonite', 'gregicsifting:chunk.bentonite_sand', true)
                multiSmelt('gtceu:dust.magnesium', 'gregicsifting:chunk.magnesite_sand', true)
                multiSmelt('2x gtceu:gem.olivine', 'gregicsifting:chunk.olivine_sand', true)
            //Aluminium
                multiSmelt('gtceu:ingot.beryllium', 'gregicsifting:chunk.beryllium_sand', true)
                multiSmelt('minecraft:emerald', 'gregicsifting:chunk.emerald_sand', true)
                multiSmelt('gtceu:ingot.thorium', 'gregicsifting:chunk.thorium_sand', true)
                multiSmelt('3x gtceu:gem.grossular', 'gregicsifting:chunk.grossular_sand', true)
                multiSmelt('3x gtceu:gem.spessartine', 'gregicsifting:chunk.spessartine_sand', true)
                multiSmelt('gtceu:ingot.manganese', 'gregicsifting:chunk.pyrolusite_sand', true)
                multiSmelt('gtceu:dust.tantalite', 'gregicsifting:chunk.tantalite_sand', true)
        //Andesite
            //Bronze
                multiSmelt('5x minecraft:redstone', 'gregicsifting:chunk.redstone_stone', true)
                multiSmelt('gtceu:gem.ruby', 'gregicsifting:chunk.ruby_stone', true)
                multiSmelt('gtceu:gem.cinnabar', 'gregicsifting:chunk.cinnabar_stone', true)
                multiSmelt('gtceu:dust.chromite', 'gregicsifting:chunk.chromite_stone', true)
                multiSmelt('3x gtceu:gem.almandine', 'gregicsifting:chunk.almandine_stone', true)
                multiSmelt('3x gtceu:gem.pyrope', 'gregicsifting:chunk.pyrope_stone', true)
                multiSmelt('gtceu:gem.sapphire', 'gregicsifting:chunk.sapphire_stone', true)
                multiSmelt('gtceu:gem.green_sapphire', 'gregicsifting:chunk.green_sapphire_stone', true)
                multiSmelt('gtceu:gem.topaz', 'gregicsifting:chunk.topaz_stone', true)
                multiSmelt('gtceu:gem.blue_topaz', 'gregicsifting:chunk.blue_topaz_stone', true)
            //Steel
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.chalcopyrite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.iron_stone', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.pyrite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.yellow_limonite_stone', true)
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.malachite_stone', true)
                multiSmelt('2x gtceu:dust.bastnasite', 'gregicsifting:chunk.bastnasite_stone', true)
                multiSmelt('4x gtceu:gem.monazite', 'gregicsifting:chunk.monazite_stone', true)
                //No Smelting For Neodymium
                multiSmelt('gtceu:ingot.nickel', 'gregicsifting:chunk.garnierite_stone', true)
                multiSmelt('gtceu:ingot.nickel', 'gregicsifting:chunk.nickel_stone', true)
                multiSmelt('gtceu:ingot.cobalt', 'gregicsifting:chunk.cobaltite_stone', true)
                multiSmelt('gtceu:ingot.nickel', 'gregicsifting:chunk.pentlandite_stone', true)
                multiSmelt('3x gtceu:dust.bentonite', 'gregicsifting:chunk.bentonite_stone', true)
                multiSmelt('gtceu:dust.magnesium', 'gregicsifting:chunk.magnesite_stone', true)
                multiSmelt('2x gtceu:gem.olivine', 'gregicsifting:chunk.olivine_stone', true)
                multiSmelt('gtceu:dust.pitchblende', 'gregicsifting:chunk.pitchblende_stone', true)
                multiSmelt('gtceu:dust.uraninite', 'gregicsifting:chunk.uraninite_stone', true)
                multiSmelt('gtceu:dust.graphite', 'gregicsifting:chunk.graphite_stone', true)
                multiSmelt('minecraft:diamond', 'gregicsifting:chunk.diamond_stone', true)
                //Coal on line - 562
            //Aluminium
                multiSmelt('gtceu:ingot.beryllium', 'gregicsifting:chunk.beryllium_stone', true)
                multiSmelt('minecraft:emerald', 'gregicsifting:chunk.emerald_stone', true)
                multiSmelt('gtceu:ingot.thorium', 'gregicsifting:chunk.thorium_stone', true)
                multiSmelt('3x gtceu:dust.soapstone', 'gregicsifting:chunk.soapstone_stone', true)
                multiSmelt('2x gtceu:dust.talc', 'gregicsifting:chunk.talc_stone', true)
                multiSmelt('gtceu:dust.scheelite', 'gregicsifting:chunk.scheelite_stone', true)
                multiSmelt('gtceu:dust.tungstate', 'gregicsifting:chunk.tungstate_stone', true)
                multiSmelt('gtceu:dust.lithium', 'gregicsifting:chunk.lithium_stone', true)
        //Granite
            //String
                multiSmelt('4x gtceu:gem.apatite', 'gregicsifting:chunk.apatite_stone', true)
                multiSmelt('3x gtceu:dust.tricalcium_phosphate', 'gregicsifting:chunk.tricalcium_phosphate_stone', true)
                multiSmelt('gtceu:dust.bauxite', 'gregicsifting:chunk.bauxite_stone', true)
                //Aluminium
                multiSmelt('gtceu:dust.ilmenite', 'gregicsifting:chunk.ilmenite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'gregicsifting:chunk.magnetite_stone', true)
                //Iron
                multiSmelt('gtceu:dust.vanadium_magnetite', 'gregicsifting:chunk.vanadium_magnetite_stone', true)
                multiSmelt('minecraft:gold_ingot', 'gregicsifting:chunk.gold_stone', true)
                multiSmelt('2x gtceu:gem.quartzite', 'gregicsifting:chunk.quartzite_stone', true)
                multiSmelt('gtceu:dust.barite', 'gregicsifting:chunk.barite_stone', true)
                multiSmelt('2x gtceu:gem.certus_quartz', 'gregicsifting:chunk.certus_quartz_stone', true)
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.tetrahedrite_stone', true)
                //Copper
                multiSmelt('gtceu:ingot.antimony', 'gregicsifting:chunk.stibnite_stone', true)
            //Bronze
                //Redstone
                //Ruby
                //Cinnabar
                //Chromite
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.bornite_stone', true)
                multiSmelt('minecraft:copper_ingot', 'gregicsifting:chunk.chalcocite_stone', true)
                multiSmelt('6x gtceu:gem.lazurite', 'gregicsifting:chunk.lazurite_stone', true)
                multiSmelt('6x gtceu:gem.sodalite', 'gregicsifting:chunk.sodalite_stone', true)
                multiSmelt('6x minecraft:lapis_lazuli', 'gregicsifting:chunk.lapis_stone', true)
                multiSmelt('gtceu:dust.calcite', 'gregicsifting:chunk.calcite_stone', true)
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
                multiSmelt('gtceu:dust.kyanite', 'gregicsifting:chunk.kyanite_stone', true)
                multiSmelt('2x gtceu:dust.mica', 'gregicsifting:chunk.mica_stone', true)
                //Cassiterite
                multiSmelt('gtceu:dust.pollucite', 'gregicsifting:chunk.pollucite_stone', true)
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                multiSmelt('gtceu:dust.wulfenite', 'gregicsifting:chunk.wulfenite_stone', true)
                multiSmelt('gtceu:ingot.molybdenum', 'gregicsifting:chunk.molybdenite_stone', true)
                multiSmelt('gtceu:dust.powellite', 'gregicsifting:chunk.powellite_stone', true)
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
                multiSmelt('3x gtceu:dust.alunite', 'gregicsifting:chunk.alunite_stone', true)
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
                multiSmelt('2x minecraft:copper_ingot', 'gregicsifting:chunk.chalcopyrite_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'gregicsifting:chunk.iron_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'gregicsifting:chunk.pyrite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'gregicsifting:chunk.copper_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'gregicsifting:chunk.yellow_limonite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'gregicsifting:chunk.malachite_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'gregicsifting:chunk.magnetite_nether', true)
                multiSmelt('2x gtceu:dust.vanadium_magnetite', 'gregicsifting:chunk.vanadium_magnetite_nether', true)
                multiSmelt('2x minecraft:gold_ingot', 'gregicsifting:chunk.gold_nether', true)
                multiSmelt('4x minecraft:quartz', 'gregicsifting:chunk.nether_quartz_nether', true)
                multiSmelt('2x gtceu:dust.sulfur', 'gregicsifting:chunk.sulfur_nether', true)
                multiSmelt('2x gtceu:ingot.zinc', 'gregicsifting:chunk.sphalerite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'gregicsifting:chunk.tetrahedrite_nether', true)
                multiSmelt('2x gtceu:ingot.antimony', 'gregicsifting:chunk.stibnite_nether', true)
            //Aluminium
                multiSmelt('2x gtceu:ingot.nickel', 'gregicsifting:chunk.garnierite_nether', true)
                multiSmelt('2x gtceu:ingot.nickel', 'gregicsifting:chunk.nickel_nether', true)
                multiSmelt('2x gtceu:ingot.cobalt', 'gregicsifting:chunk.cobaltite_nether', true)
                multiSmelt('2x gtceu:ingot.nickel', 'gregicsifting:chunk.pentlandite_nether', true)
                multiSmelt('10x minecraft:redstone', 'gregicsifting:chunk.redstone_nether', true)
                multiSmelt('2x gtceu:gem.ruby', 'gregicsifting:chunk.ruby_nether', true)
                multiSmelt('2x gtceu:gem.cinnabar', 'gregicsifting:chunk.cinnabar_nether', true)
                multiSmelt('2x gtceu:dust.chromite', 'gregicsifting:chunk.chromite_nether', true)
                multiSmelt('10x gtceu:dust.electrotine', 'gregicsifting:chunk.electrotine_nether', true)
                multiSmelt('2x gtceu:gem.topaz', 'gregicsifting:chunk.topaz_nether', true)
                multiSmelt('4x gtceu:gem.blue_topaz', 'gregicsifting:chunk.blue_topaz_nether', true)
        //Endstone
            //Bronze
                multiSmelt('2x gtceu:ingot.beryllium', 'gregicsifting:chunk.beryllium_end', true)
                multiSmelt('4x minecraft:emerald', 'gregicsifting:chunk.emerald_end', true)
                multiSmelt('2x gtceu:ingot.thorium', 'gregicsifting:chunk.thorium_end', true)
            //Steel
                multiSmelt('6x gtceu:gem.grossular', 'gregicsifting:chunk.grossular_end', true)
                multiSmelt('6x gtceu:gem.spessartine', 'gregicsifting:chunk.spessartine_end', true)
                multiSmelt('2x gtceu:ingot.manganese', 'gregicsifting:chunk.pyrolusite_end', true)
                multiSmelt('2x gtceu:dust.tantalite', 'gregicsifting:chunk.tantalite_end', true)
                multiSmelt('2x gtceu:dust.wulfenite', 'gregicsifting:chunk.wulfenite_end', true)
                multiSmelt('2x gtceu:ingot.molybdenum', 'gregicsifting:chunk.molybdenite_end', true)
                multiSmelt('2x gtceu:dust.powellite', 'gregicsifting:chunk.powellite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'gregicsifting:chunk.garnierite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'gregicsifting:chunk.nickel_end', true)
                multiSmelt('2x gtceu:ingot.cobalt', 'gregicsifting:chunk.cobaltite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'gregicsifting:chunk.pentlandite_end', true)
                multiSmelt('6x gtceu:dust.bentonite', 'gregicsifting:chunk.bentonite_end', true)
                multiSmelt('2x gtceu:dust.magnesium', 'gregicsifting:chunk.magnesite_end', true)
                multiSmelt('4x gtceu:gem.olivine', 'gregicsifting:chunk.olivine_end', true)
                multiSmelt('2x gtceu:dust.chromite', 'gregicsifting:chunk.chromite_end', true)
                multiSmelt('2x gtceu:dust.cooperite', 'gregicsifting:chunk.sheldonite_end', true)
                //Palladium
                multiSmelt('2x gtceu:dust.scheelite', 'gregicsifting:chunk.scheelite_end', true)
                multiSmelt('2x gtceu:dust.tungstate', 'gregicsifting:chunk.tungstate_end', true)
                multiSmelt('2x gtceu:dust.lithium', 'gregicsifting:chunk.lithium_end', true)
            //Aluminium
                //Naquadah
                multiSmelt('12x gtceu:gem.lazurite', 'gregicsifting:chunk.lazurite_end', true)
                multiSmelt('12x gtceu:gem.sodalite', 'gregicsifting:chunk.sodalite_end', true)
                multiSmelt('12x minecraft:lapis_lazuli', 'gregicsifting:chunk.lapis_end', true)
                multiSmelt('2x gtceu:dust.calcite', 'gregicsifting:chunk.calcite_end', true)
})
