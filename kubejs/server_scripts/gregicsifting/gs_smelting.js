ServerEvents.recipes(event => {
    let multiSmelt = (output, input, includeBlasting) => {
        event.smelting(output, input).xp(0.7)
        
        if (includeBlasting) {
          event.blasting(output, input).xp(0.7)
        }
      }
        //Gravel
            //String
                multiSmelt('gtceu:dust.gypsum','kubejs:chunk.gypsum_stone',true)
                multiSmelt('gtceu:dust.spodumene','kubejs:chunk.spodumene_stone',true)
                multiSmelt('2x gtceu:ingot.tin','kubejs:chunk.cassiterite_stone',true)
                multiSmelt('2x minecraft:coal','kubejs:chunk.coal_stone',true)
                multiSmelt('2x gtceu:dust.trona','kubejs:chunk.trona_stone',true)
                multiSmelt('2x gtceu:dust.fullers_earth','kubejs:chunk.fullers_earth_stone',true)
                multiSmelt('minecraft:iron_ingot','kubejs:chunk.basaltic_mineral_stone',true)
                multiSmelt('2x gtceu:gem.salt','kubejs:chunk.salt_stone',true)
                multiSmelt('minecraft:iron_ingot','kubejs:chunk.granitic_mineral_stone',true)
                multiSmelt('gtceu:ingot.tin','kubejs:chunk.tin_stone',true)
                multiSmelt('2x gtceu:gem.rock_salt','kubejs:chunk.rock_salt_stone',true)
                multiSmelt('2x gtceu:dust.lepidolite','kubejs:chunk.lepidolite_stone',true)
            //Bronze
                multiSmelt('gtceu:ingot.lead','kubejs:chunk.galena_stone',true)
                multiSmelt('gtceu:ingot.lead','kubejs:chunk.lead_stone',true)
                multiSmelt('gtceu:ingot.silver','kubejs:chunk.silver_stone',true)
                multiSmelt('3x gtceu:dust.zeolite','kubejs:chunk.zeolite_stone',true)
                multiSmelt('3x gtceu:dust.glauconite_sand','kubejs:chunk.glauconite_sand_stone',true)
                multiSmelt('gtceu:dust.oilsands','kubejs:chunk.oilsands_stone',true)
                multiSmelt('gtceu:dust.garnet_sand','kubejs:chunk.garnet_sand_stone',true)
                multiSmelt('3x gtceu:dust.asbestos','kubejs:chunk.asbestos_stone',true)
                multiSmelt('3x gtceu:dust.diatomite','kubejs:chunk.diatomite_stone',true)
            //Steel
                multiSmelt('gtceu:ingot.platinum','kubejs:chunk.platinum_stone',true)
        //Sand
            //Bronze
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.copper_sand', true)
                multiSmelt('5x minecraft:redstone', 'kubejs:chunk.redstone_sand', true)
                multiSmelt('gtceu:gem.cinnabar', 'kubejs:chunk.cinnabar_sand', true)
                multiSmelt('gtceu:dust.chromite', 'kubejs:chunk.chromite_sand', true)
                multiSmelt('3x gtceu:gem.pyrope', 'kubejs:chunk.pyrope_sand', true)
                multiSmelt('gtceu:gem.sapphire', 'kubejs:chunk.sapphire_sand', true)
                multiSmelt('gtceu:gem.green_sapphire', 'kubejs:chunk.green_sapphire_sand', true)
            //Steel
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.chalcopyrite_sand', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.iron_sand', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.pyrite_sand', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.yellow_limonite_sand', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.malachite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.garnierite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.nickel_sand', true)
                multiSmelt('gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_sand', true)
                multiSmelt('3x gtceu:dust.bentonite', 'kubejs:chunk.bentonite_sand', true)
                multiSmelt('gtceu:dust.magnesium', 'kubejs:chunk.magnesite_sand', true)
                multiSmelt('2x gtceu:gem.olivine', 'kubejs:chunk.olivine_sand', true)
            //Aluminium
                multiSmelt('gtceu:ingot.beryllium', 'kubejs:chunk.beryllium_sand', true)
                multiSmelt('minecraft:emerald', 'kubejs:chunk.emerald_sand', true)
                multiSmelt('gtceu:ingot.thorium', 'kubejs:chunk.thorium_sand', true)
                multiSmelt('3x gtceu:gem.grossular', 'kubejs:chunk.grossular_sand', true)
                multiSmelt('3x gtceu:gem.spessartine', 'kubejs:chunk.spessartine_sand', true)
                multiSmelt('gtceu:ingot.manganese', 'kubejs:chunk.pyrolusite_sand', true)
                multiSmelt('gtceu:dust.tantalite', 'kubejs:chunk.tantalite_sand', true)
        //Andesite
            //Bronze
                multiSmelt('5x minecraft:redstone', 'kubejs:chunk.redstone_stone', true)
                multiSmelt('gtceu:gem.ruby', 'kubejs:chunk.ruby_stone', true)
                multiSmelt('gtceu:gem.cinnabar', 'kubejs:chunk.cinnabar_stone', true)
                multiSmelt('gtceu:dust.chromite', 'kubejs:chunk.chromite_stone', true)
                multiSmelt('3x gtceu:gem.almandine', 'kubejs:chunk.almandine_stone', true)
                multiSmelt('3x gtceu:gem.pyrope', 'kubejs:chunk.pyrope_stone', true)
                multiSmelt('gtceu:gem.sapphire', 'kubejs:chunk.sapphire_stone', true)
                multiSmelt('gtceu:gem.green_sapphire', 'kubejs:chunk.green_sapphire_stone', true)
                multiSmelt('gtceu:gem.topaz', 'kubejs:chunk.topaz_stone', true)
                multiSmelt('gtceu:gem.blue_topaz', 'kubejs:chunk.blue_topaz_stone', true)
            //Steel
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.chalcopyrite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.iron_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.pyrite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.yellow_limonite_stone', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.malachite_stone', true)
                multiSmelt('2x gtceu:dust.bastnasite', 'kubejs:chunk.bastnasite_stone', true)
                multiSmelt('4x gtceu:gem.monazite', 'kubejs:chunk.monazite_stone', true)
                //No Smelting For Neodymium
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.garnierite_stone', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.nickel_stone', true)
                multiSmelt('gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_stone', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_stone', true)
                multiSmelt('3x gtceu:dust.bentonite', 'kubejs:chunk.bentonite_stone', true)
                multiSmelt('gtceu:dust.magnesium', 'kubejs:chunk.magnesite_stone', true)
                multiSmelt('2x gtceu:gem.olivine', 'kubejs:chunk.olivine_stone', true)
                multiSmelt('gtceu:dust.pitchblende', 'kubejs:chunk.pitchblende_stone', true)
                multiSmelt('gtceu:dust.uraninite', 'kubejs:chunk.uraninite_stone', true)
                multiSmelt('gtceu:dust.graphite', 'kubejs:chunk.graphite_stone', true)
                multiSmelt('minecraft:diamond', 'kubejs:chunk.diamond_stone', true)
                //Coal on line - 562
            //Aluminium
                multiSmelt('gtceu:ingot.beryllium', 'kubejs:chunk.beryllium_stone', true)
                multiSmelt('minecraft:emerald', 'kubejs:chunk.emerald_stone', true)
                multiSmelt('gtceu:ingot.thorium', 'kubejs:chunk.thorium_stone', true)
                multiSmelt('3x gtceu:dust.soapstone', 'kubejs:chunk.soapstone_stone', true)
                multiSmelt('2x gtceu:dust.talc', 'kubejs:chunk.talc_stone', true)
                multiSmelt('gtceu:dust.scheelite', 'kubejs:chunk.scheelite_stone', true)
                multiSmelt('gtceu:dust.tungstate', 'kubejs:chunk.tungstate_stone', true)
                multiSmelt('gtceu:dust.lithium', 'kubejs:chunk.lithium_stone', true)
        //Granite
            //String
                multiSmelt('4x gtceu:gem.apatite', 'kubejs:chunk.apatite_stone', true)
                multiSmelt('3x gtceu:dust.tricalcium_phosphate', 'kubejs:chunk.tricalcium_phosphate_stone', true)
                multiSmelt('gtceu:dust.bauxite', 'kubejs:chunk.bauxite_stone', true)
                //Aluminium
                multiSmelt('gtceu:dust.ilmenite', 'kubejs:chunk.ilmenite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.magnetite_stone', true)
                //Iron
                multiSmelt('gtceu:dust.vanadium_magnetite', 'kubejs:chunk.vanadium_magnetite_stone', true)
                multiSmelt('minecraft:gold_ingot', 'kubejs:chunk.gold_stone', true)
                multiSmelt('2x gtceu:gem.quartzite', 'kubejs:chunk.quartzite_stone', true)
                multiSmelt('gtceu:dust.barite', 'kubejs:chunk.barite_stone', true)
                multiSmelt('2x gtceu:gem.certus_quartz', 'kubejs:chunk.certus_quartz_stone', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.tetrahedrite_stone', true)
                //Copper
                multiSmelt('gtceu:ingot.antimony', 'kubejs:chunk.stibnite_stone', true)
            //Bronze
                //Redstone
                //Ruby
                //Cinnabar
                //Chromite
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.bornite_stone', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.chalcocite_stone', true)
                multiSmelt('6x gtceu:gem.lazurite', 'kubejs:chunk.lazurite_stone', true)
                multiSmelt('6x gtceu:gem.sodalite', 'kubejs:chunk.sodalite_stone', true)
                multiSmelt('6x minecraft:lapis_lazuli', 'kubejs:chunk.lapis_stone', true)
                multiSmelt('gtceu:dust.calcite', 'kubejs:chunk.calcite_stone', true)
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
                multiSmelt('gtceu:dust.kyanite', 'kubejs:chunk.kyanite_stone', true)
                multiSmelt('2x gtceu:dust.mica', 'kubejs:chunk.mica_stone', true)
                //Cassiterite
                multiSmelt('gtceu:dust.pollucite', 'kubejs:chunk.pollucite_stone', true)
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                multiSmelt('gtceu:dust.wulfenite', 'kubejs:chunk.wulfenite_stone', true)
                multiSmelt('gtceu:ingot.molybdenum', 'kubejs:chunk.molybdenite_stone', true)
                multiSmelt('gtceu:dust.powellite', 'kubejs:chunk.powellite_stone', true)
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
                multiSmelt('3x gtceu:dust.alunite', 'kubejs:chunk.alunite_stone', true)
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
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.chalcopyrite_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.iron_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.pyrite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.copper_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.yellow_limonite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.malachite_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.magnetite_nether', true)
                multiSmelt('2x gtceu:dust.vanadium_magnetite', 'kubejs:chunk.vanadium_magnetite_nether', true)
                multiSmelt('2x minecraft:gold_ingot', 'kubejs:chunk.gold_nether', true)
                multiSmelt('4x minecraft:quartz', 'kubejs:chunk.nether_quartz_nether', true)
                multiSmelt('2x gtceu:dust.sulfur', 'kubejs:chunk.sulfur_nether', true)
                multiSmelt('2x gtceu:ingot.zinc', 'kubejs:chunk.sphalerite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.tetrahedrite_nether', true)
                multiSmelt('2x gtceu:ingot.antimony', 'kubejs:chunk.stibnite_nether', true)
            //Aluminium
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.garnierite_nether', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.nickel_nether', true)
                multiSmelt('2x gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_nether', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_nether', true)
                multiSmelt('10x minecraft:redstone', 'kubejs:chunk.redstone_nether', true)
                multiSmelt('2x gtceu:gem.ruby', 'kubejs:chunk.ruby_nether', true)
                multiSmelt('2x gtceu:gem.cinnabar', 'kubejs:chunk.cinnabar_nether', true)
                multiSmelt('2x gtceu:dust.chromite', 'kubejs:chunk.chromite_nether', true)
                multiSmelt('10x gtceu:dust.electrotine', 'kubejs:chunk.electrotine_nether', true)
                multiSmelt('2x gtceu:gem.topaz', 'kubejs:chunk.topaz_nether', true)
                multiSmelt('4x gtceu:gem.blue_topaz', 'kubejs:chunk.blue_topaz_nether', true)
        //Endstone
            //Bronze
                multiSmelt('2x gtceu:ingot.beryllium', 'kubejs:chunk.beryllium_end', true)
                multiSmelt('4x minecraft:emerald', 'kubejs:chunk.emerald_end', true)
                multiSmelt('2x gtceu:ingot.thorium', 'kubejs:chunk.thorium_end', true)
            //Steel
                multiSmelt('6x gtceu:gem.grossular', 'kubejs:chunk.grossular_end', true)
                multiSmelt('6x gtceu:gem.spessartine', 'kubejs:chunk.spessartine_end', true)
                multiSmelt('2x gtceu:ingot.manganese', 'kubejs:chunk.pyrolusite_end', true)
                multiSmelt('2x gtceu:dust.tantalite', 'kubejs:chunk.tantalite_end', true)
                multiSmelt('2x gtceu:dust.wulfenite', 'kubejs:chunk.wulfenite_end', true)
                multiSmelt('2x gtceu:ingot.molybdenum', 'kubejs:chunk.molybdenite_end', true)
                multiSmelt('2x gtceu:dust.powellite', 'kubejs:chunk.powellite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.garnierite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.nickel_end', true)
                multiSmelt('2x gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_end', true)
                multiSmelt('6x gtceu:dust.bentonite', 'kubejs:chunk.bentonite_end', true)
                multiSmelt('2x gtceu:dust.magnesium', 'kubejs:chunk.magnesite_end', true)
                multiSmelt('4x gtceu:gem.olivine', 'kubejs:chunk.olivine_end', true)
                multiSmelt('2x gtceu:dust.chromite', 'kubejs:chunk.chromite_end', true)
                multiSmelt('2x gtceu:dust.cooperite', 'kubejs:chunk.sheldonite_end', true)
                //Palladium
                multiSmelt('2x gtceu:dust.scheelite', 'kubejs:chunk.scheelite_end', true)
                multiSmelt('2x gtceu:dust.tungstate', 'kubejs:chunk.tungstate_end', true)
                multiSmelt('2x gtceu:dust.lithium', 'kubejs:chunk.lithium_end', true)
            //Aluminium
                //Naquadah
                multiSmelt('12x gtceu:gem.lazurite', 'kubejs:chunk.lazurite_end', true)
                multiSmelt('12x gtceu:gem.sodalite', 'kubejs:chunk.sodalite_end', true)
                multiSmelt('12x minecraft:lapis_lazuli', 'kubejs:chunk.lapis_end', true)
                multiSmelt('2x gtceu:dust.calcite', 'kubejs:chunk.calcite_end', true)
})