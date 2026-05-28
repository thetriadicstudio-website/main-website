# The Triadic Studio — Interior Oracle

## Overview
A Streamlit web application that generates personalised spiritual interior design reports based on a user's name and birthdate. Branded as a £1.11 cheat code for TheTriadicStudio website.

## Architecture
- **`app.py`** — Main Streamlit application (single file, no backend required)
- **`main.py`** — Original CLI version (kept for reference)
- **`.streamlit/config.toml`** — Server config (port 5000, headless, CORS off)

## How It Works
1. User enters their name and birthdate
2. App calculates: Western star sign, Chinese zodiac animal, Life Path number, Lo Shu compass gaps
3. Three visual cards are displayed: The Soul (Western), The Core (Chinese), The Space (Lo Shu/Numerology)
4. Three tabs provide deeper detail: Soul & Core synthesis, Spatial Compass Gaps, Thermal Balance Alert

## Running the App
```bash
streamlit run app.py --server.port 5000
```

## Key Data Systems
- **Western Astrology** — 12 signs with colours, gems, materials, meanings
- **Chinese Astrology** — 12 animals with colours, gems, materials, meanings
- **Life Path Numerology** — Paths 1–9, 11, 22, 33
- **Lo Shu Compass** — 9 directions mapped to missing digits in birthdate
- **Thermal Balance** — Yin/Yang analysis across Western + Chinese energies

## Design System
- Dark luxury aesthetic: black/gold palette
- Playfair Display (serif) + Inter (sans) fonts
- Three card colours: Blue (Soul), Red (Core), Green (Space)
- £1.11 pricing prominently featured throughout
