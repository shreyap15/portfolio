# Visual asset provenance

The latest asset pass uses the user-supplied files in `src/images/`, inspected once and retained unchanged. Images preserve their aspect ratios with contained thumbnails, constrained enlarged views, and descriptive alt text.

| Supplied file | Usage |
| --- | --- |
| `loom_fyp.png` | Loom discovery screenshot |
| `wheelway-map.jpeg` | WheelWay route interface |
| `wheelway-circuit.jpeg` | WheelWay Raspberry Pi hardware gallery |
| `VisualizationPDF_TeamA_GrantScope (1).png` | GrantScope comparison charts |
| `VisualizationPDF_TeamA_GrantScope.png` | GrantScope decision assistant gallery |
| `campus_idf_curves.png` | Tang campus IDF / NOAA comparison |
| `storm_of_record.png` | Tang rainfall and temperature gallery |
| `semantic_similarity_mpnet_1949_2024.png` | Collis semantic trajectory chart |
| `_BMOR_CA_Lai_Prashantha_WE.png` | CWL home screen |
| `_BMOR_CA_Lai_Prashantha_WE (1).png` | CWL customization screen |
| `_BMOR_CA_Lai_Prashantha_WE (2).png` | CWL seasonal menu screen |

`wheelway-image.jpeg` was inspected but omitted: the route and hardware images provide a more focused pair. CWL screens remain small, at or below their native width. Generic architecture graphics from the earlier pass were removed.

## Data-derived visuals

Coffee's treatment/control timeline and ML flow use the supplied dates, methods, variables, and regional findings in `ASSET_CONTENT_REVISION_SPEC.md`. They show analytical structure, not invented quantitative results.

March Madness compares actual saved holdout log loss for logistic regression, random forest, and ensemble models. Women and Men have separate views because their evaluation runs differ. Data is pinned to repository commit `906075cbbf73199a4e29e78500e97e746498aa4a`; source CSV snapshots are in `docs/sources/march-women-metrics.csv` and `docs/sources/march-men-metrics.csv`. The chart links directly to each pinned source. Lowest saved log loss: women, logistic regression (0.4033); men, ensemble (0.6224).

## Existing employer marks and fonts

The earlier pass retrieved the following official employer marks. They remain small, secondary, and unchanged in proportion:

- Tata: https://www.tataelectronics.com/documents/d/tepl/tepl-logo
- Coffee & Water Lab: https://static.wixstatic.com/media/97fa8a_6651c56f8b6749b8aa1d65c2493410f7~mv2.png
- AMD: https://www.amd.com/content/dam/code/images/header/amd-header-logo.svg

Instrument Sans and Newsreader are self-hosted through Fontsource. Their SIL Open Font License files are included in `public/assets/`.
