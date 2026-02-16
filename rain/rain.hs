stack (
  sound("<bd - sd bd>*8").bank("RhythmAce"), // hh?
  note(`<
  [<c e g b>*16]
  [<f a c4 e4>*16]
  >`).sound("gm_electric_guitar_jazz")
)._scope()
  
note("[c f, e a, g c4, b e4]/2")
  .sound("gm_synth_bass_1")
  .mask("0 0 0 0 1")