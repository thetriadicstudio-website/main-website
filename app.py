"""
BLUEPRINT: The Sacred Interior
A Numerological & Astrological Interior Design System
Version 2.0 — Designer Edition with Material Specifications
"""

import streamlit as st
from datetime import datetime, date
import math

# ============================================================================
# CONFIGURATION & STYLING
# ============================================================================

COLOUR_HEX = {
    "Vermillion Red": "#E34234", "Burnt Orange": "#CC5500", "Crimson": "#DC143C",
    "Forest Green": "#228B22", "Sage": "#BCB88A", "Deep Moss": "#4A5240",
    "Citrine Yellow": "#E4D00A", "Electric Blue": "#007FFF", "Spring Green": "#00FF7F",
    "Pearl White": "#F8F6F0", "Silver Grey": "#A8A9AD", "Seafoam": "#93E9BE",
    "Regal Purple": "#7B2FBE", "Royal Blue": "#4169E1",
    "Sage Green": "#8FBC8F", "Wheat": "#F5DEB3", "Soft Grey": "#C2C2C2",
    "Dusty Rose": "#DCAE96", "Soft Blue": "#6CA0DC", "Cream": "#FFFDD0",
    "Black": "#1C1C1C", "Burgundy": "#800020", "Deep Purple": "#301934",
    "Royal Purple": "#7851A9", "Turquoise": "#40E0D0", "Amber": "#FFBF00",
    "Charcoal Grey": "#36454F", "Deep Brown": "#6B3A2A", "Navy": "#003153",
    "Violet": "#7F00FF", "Silver": "#C0C0C0", "Lavender": "#E6E6FA",
    "Silver Blue": "#A2B5CD", "Charcoal": "#36454F", "Gunmetal Grey": "#2C3539",
    "Warm Taupe": "#8B7355", "Caramel": "#C68642", "Pure White": "#F8F8FF",
    "Light Grey": "#D3D3D3", "Blush": "#DE5D83", "Soft Sage": "#A8C5A0",
    "Gold": "#C9A84C", "Warm White": "#FFF8DC", "Rich Cream": "#FFFDD0",
    "Clean White": "#F8F8FF", "Natural Linen": "#FAF0E6", "Stone": "#928E85",
    "Blush Pink": "#FFB6C1", "Powder Blue": "#B0E0E6", "Wine": "#722F37",
    "Midnight Blue": "#191970", "Teal": "#008080", "Rich Brown": "#6B3A2A",
    "Slate": "#708090", "White": "#F8F8FF", "Grey": "#808080",
    "Pale Green": "#98FB98", "Misty Mauve": "#B0899A", "Copper": "#B87333",
    "Bronze": "#CD7F32", "Gold Leaf": "#DBA520", "Rose Gold": "#B76E79",
    "Orange": "#FF8C00", "Mint": "#98FF98", "Pale Lavender": "#DCD0FF",
    "Moonstone iridescence": "#D9DEEA", "Mother of Pearl shimmer": "#F0EAD6",
    "Magenta": "#FF00FF", "Terracotta": "#E2725B", "Soft Green": "#90EE90",
    "Blood Red": "#8B0000", "Cobalt": "#0047AB", "Neon accents": "#39FF14",
    "Iridescent surfaces": "#C5B4E3", "Unexpected colour pops": "#FF6B9D",
    "Iridescent tones": "#C5B4E3", "Pearl": "#EAE0C8", "Amethyst purple": "#9966CC",
}

def colour_swatches_html(colour_names):
    swatches = ""
    for name in colour_names:
        hex_val = COLOUR_HEX.get(name, "#888888")
        r, g, b = int(hex_val[1:3], 16), int(hex_val[3:5], 16), int(hex_val[5:7], 16)
        luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        label_color = "#1C1710" if luminance > 0.5 else "#F8F0E0"
        swatches += (
            f'<span style="display:inline-flex;align-items:center;gap:6px;'
            f'background:{hex_val};color:{label_color};'
            f'padding:4px 10px 4px 8px;border-radius:3px;margin:3px 4px 3px 0;'
            f'font-family:Montserrat,sans-serif;font-size:0.72rem;font-weight:400;'
            f'letter-spacing:0.06em;white-space:nowrap;">'
            f'{name}</span>'
        )
    return f'<div style="display:flex;flex-wrap:wrap;gap:2px;margin:0.4rem 0;">{swatches}</div>'


def apply_luxury_styling():
    """Apply silver-indigo luxury aesthetic with metallic accents"""
    st.markdown("""
    <style>
    @import url('[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@200;300;400;500&display=swap)');

    :root {
        --indigo-deep: #252018;
        --indigo-primary: #332A1E;
        --indigo-accent: #332A1E;
        --silver-light: #D4AF8F;
        --silver-medium: #C9A961;
        --silver-dark: #9a8f88;
        --platinum: #252018;
        --text-silver: #9a8f88;
        --text-indigo: #D4AF8F;
        --gradient-silver: linear-gradient(135deg, #D4AF8F 0%, #C9A961 100%);
    }

    .stApp {
        background: linear-gradient(180deg, #1C1710 0%, #252018 50%, #332A1E 100%);
    }

    /* Main container styling */
    .main .block-container {
        background: transparent;
        padding-top: 2rem;
    }

    /* Header styling */
    h1 {
        font-family: 'Cormorant Garamond', serif !important;
        font-weight: 300 !important;
        letter-spacing: 0.3em !important;
        background: linear-gradient(135deg, #D4AF8F 0%, #FFFFFF 50%, #D4AF8F 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-transform: uppercase;
        text-align: center;
        font-size: 2.8rem !important;
        text-shadow: 0 0 60px rgba(212, 175, 143, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
        border-bottom: 2px solid rgba(212, 175, 143, 0.4);
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        filter: drop-shadow(0 0 8px rgba(212, 175, 143, 0.4));
    }

    h2 {
        font-family: 'Cormorant Garamond', serif !important;
        font-weight: 400 !important;
        letter-spacing: 0.15em !important;
        background: linear-gradient(135deg, #FFFFFF 0%, #D4AF8F 50%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-transform: uppercase;
        font-size: 1.6rem !important;
        margin-top: 2.5rem;
        padding-left: 1rem;
        border-left: 4px solid rgba(212, 175, 143, 0.6);
        text-shadow: 0 0 20px rgba(212, 175, 143, 0.3);
        filter: drop-shadow(0 0 6px rgba(212, 175, 143, 0.3));
    }

    h3 {
        font-family: 'Cormorant Garamond', serif !important;
        font-weight: 500 !important;
        letter-spacing: 0.1em !important;
        background: linear-gradient(135deg, #C9A961 0%, #FFFFFF 50%, #C9A961 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 1.3rem !important;
        text-shadow: 0 0 15px rgba(201, 169, 97, 0.3);
        filter: drop-shadow(0 0 4px rgba(201, 169, 97, 0.3));
    }

    /* Body text */
    p, li, .stMarkdown {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 300 !important;
        color: #9a8f88 !important;
        line-height: 1.8 !important;
        letter-spacing: 0.02em;
    }

    /* Card styling for sections */
    .blueprint-card {
        background: linear-gradient(145deg, rgba(37, 32, 24, 0.9) 0%, rgba(51, 42, 30, 0.8) 100%);
        border: 1px solid rgba(51, 42, 30, 0.15);
        border-radius: 4px;
        padding: 2rem;
        margin: 1.5rem 0;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(37, 32, 24, 0.05);
    }

    .material-spec {
        background: linear-gradient(135deg, rgba(28, 23, 16, 0.95) 0%, rgba(37, 32, 24, 0.9) 100%);
        border-left: 2px solid #D4AF8F;
        padding: 1.5rem 2rem;
        margin: 1rem 0;
        font-family: 'Montserrat', sans-serif;
    }

    .shopping-list {
        background: linear-gradient(180deg, rgba(212, 175, 143, 0.1) 0%, rgba(37, 32, 24, 0.95) 100%);
        border: 1px solid rgba(212, 175, 143, 0.3);
        border-radius: 8px;
        padding: 2rem;
        margin: 2rem 0;
    }

    .shopping-list h3 {
        color: #D4AF8F !important;
        text-align: center;
        border-bottom: 1px solid rgba(51, 42, 30, 0.2);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }

    /* Expander styling */
    .streamlit-expanderHeader {
        font-family: 'Cormorant Garamond', serif !important;
        font-size: 1.1rem !important;
        font-weight: 400 !important;
        color: #C9A961 !important;
        background: rgba(37, 32, 24, 0.5) !important;
        border: 1px solid rgba(51, 42, 30, 0.1) !important;
    }

    /* Input styling */
    .stTextInput > div > div > input {
        background: rgba(28, 23, 16, 0.8) !important;
        border: 1px solid rgba(51, 42, 30, 0.2) !important;
        color: #D4AF8F !important;
        font-family: 'Montserrat', sans-serif !important;
    }

    .stDateInput > div > div > input {
        background: rgba(28, 23, 16, 0.8) !important;
        border: 1px solid rgba(51, 42, 30, 0.2) !important;
        color: #D4AF8F !important;
    }

    /* Button styling */
    .stButton > button {
        background: linear-gradient(135deg, rgba(212, 175, 143, 0.2) 0%, rgba(212, 175, 143, 0.3) 100%) !important;
        border: 1px solid rgba(51, 42, 30, 0.3) !important;
        color: #D4AF8F !important;
        font-family: 'Cormorant Garamond', serif !important;
        letter-spacing: 0.2em !important;
        text-transform: uppercase !important;
        padding: 0.75rem 2rem !important;
        transition: all 0.3s ease !important;
    }

    .stButton > button:hover {
        background: linear-gradient(135deg, rgba(212, 175, 143, 0.4) 0%, rgba(212, 175, 143, 0.5) 100%) !important;
        border-color: rgba(51, 42, 30, 0.5) !important;
        box-shadow: 0 0 20px rgba(212, 175, 143, 0.3) !important;
    }

    /* Divider */
    hr {
        border: none;
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, rgba(51, 42, 30, 0.3) 50%, transparent 100%);
        margin: 2rem 0;
    }

    /* Sidebar */
    .css-1d391kg, [data-testid="stSidebar"] {
        background: linear-gradient(180deg, #1C1710 0%, #252018 100%) !important;
        border-right: 1px solid rgba(51, 42, 30, 0.1);
    }

    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}

    /* Metallic text effect for headers */
    .metallic-text {
        background: linear-gradient(180deg, #D4AF8F 0%, #9a8f88 50%, #D4AF8F 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    /* Material category headers */
    .material-category {
        color: #D4AF8F;
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid rgba(212, 175, 143, 0.3);
    }
    </style>
    """, unsafe_allow_html=True)


# ============================================================================
# CALCULATION FUNCTIONS
# ============================================================================

def reduce_to_single_or_master(n):
    """Reduce number to single digit or master number (11, 22, 33)"""
    while n > 9 and n not in [11, 22, 33]:
        n = sum(int(d) for d in str(n))
    return n

def calculate_life_path(birth_date):
    """Calculate Life Path number from birth date"""
    day = reduce_to_single_or_master(birth_date.day)
    month = reduce_to_single_or_master(birth_date.month)
    year = reduce_to_single_or_master(sum(int(d) for d in str(birth_date.year)))
    total = day + month + year
    return reduce_to_single_or_master(total)

def calculate_soul_urge(full_name):
    """Calculate Soul Urge from vowels in name"""
    vowels = "aeiouAEIOU"
    vowel_values = {'a': 1, 'e': 5, 'i': 9, 'o': 6, 'u': 3,
                    'A': 1, 'E': 5, 'I': 9, 'O': 6, 'U': 3}
    total = sum(vowel_values.get(c, 0) for c in full_name if c in vowels)
    return reduce_to_single_or_master(total)

def get_western_zodiac(birth_date):
    """Determine Western zodiac sign from birth date"""
    month, day = birth_date.month, birth_date.day

    if (month == 3 and day >= 21) or (month == 4 and day <= 19):
        return "Aries"
    elif (month == 4 and day >= 20) or (month == 5 and day <= 20):
        return "Taurus"
    elif (month == 5 and day >= 21) or (month == 6 and day <= 20):
        return "Gemini"
    elif (month == 6 and day >= 21) or (month == 7 and day <= 22):
        return "Cancer"
    elif (month == 7 and day >= 23) or (month == 8 and day <= 22):
        return "Leo"
    elif (month == 8 and day >= 23) or (month == 9 and day <= 22):
        return "Virgo"
    elif (month == 9 and day >= 23) or (month == 10 and day <= 22):
        return "Libra"
    elif (month == 10 and day >= 23) or (month == 11 and day <= 21):
        return "Scorpio"
    elif (month == 11 and day >= 22) or (month == 12 and day <= 21):
        return "Sagittarius"
    elif (month == 12 and day >= 22) or (month == 1 and day <= 19):
        return "Capricorn"
    elif (month == 1 and day >= 20) or (month == 2 and day <= 18):
        return "Aquarius"
    else:
        return "Pisces"

def get_chinese_zodiac(birth_year):
    """Determine Chinese zodiac animal and element from birth year"""
    animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
               "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
    elements = ["Metal", "Metal", "Water", "Water", "Wood", "Wood",
                "Fire", "Fire", "Earth", "Earth"]

    animal = animals[(birth_year - 1900) % 12]
    element = elements[(birth_year - 1900) % 10]

    return animal, element

def calculate_lo_shu_grid(birth_date):
    """Generate Lo Shu grid presence from birth date digits"""
    date_string = birth_date.strftime("%d%m%Y")
    digits = [int(d) for d in date_string if d != '0']

    grid = {i: digits.count(i) for i in range(1, 10)}
    present = [n for n in range(1, 10) if grid[n] > 0]
    missing = [n for n in range(1, 10) if grid[n] == 0]

    return grid, present, missing

def calculate_personal_year(birth_date, year=2026):
    """Calculate Personal Year number for given year"""
    day = birth_date.day
    month = birth_date.month
    total = sum(int(d) for d in str(day)) + sum(int(d) for d in str(month)) + sum(int(d) for d in str(year))
    return reduce_to_single_or_master(total)


# ============================================================================
# ENCYCLOPEDIC DATA: WESTERN ZODIAC WITH INTERIOR SPECIFICATIONS
# ============================================================================

WESTERN_ZODIAC_DATA = {
    "Aries": {
        "narrative": """The Ram charges into existence with cardinal fire—pure, undiluted creative force that cannot be contained or directed by external will. This is the energy of the first breath, the initial spark, the courage to begin when no path exists. Aries natives carry within them the primordial impulse that set the universe into motion, making them natural initiators, pioneers, and champions of new territories.

Your essential nature burns with immediacy. Where others deliberate, you act. Where others see obstacles, you see challenges to overcome. This is not recklessness but rather an intuitive understanding that momentum itself creates possibility—that the universe rewards those who move first and adjust course later. Your impatience is actually a form of cosmic wisdom: you understand that perfect moments are created, not waited for.

The shadow of Aries emerges when the fire burns without direction—when action becomes reaction, when courage becomes aggression, when independence becomes isolation. Your spiritual work involves learning to channel your considerable energy toward sustainable goals rather than dispersing it across multiple battlefronts. The mature Aries discovers that true strength includes the power to pause, to listen, to let others lead when appropriate.

In relationships, you bring passion, loyalty, and protective fierce energy. You love with the intensity of someone who has never learned half-measures. Your challenge is allowing others the space to be their own champions—your instinct to rescue can sometimes overshadow others' need to fight their own battles.""",

        "interior_blueprint": """Your space must accommodate volcanic creative energy while providing enough structure to prevent burnout. The Aries home is not a retreat from the world but a launching pad—a place where you gather energy for the next adventure, strategize your next move, and recover from battles won and lost.

The entry must make a statement. You need a threshold that announces arrival, that shifts energy from passive to active the moment you cross it. Consider a dramatic foyer with high visual impact—this is where you shed the compromises of the outside world and step into your full power.

Movement pathways should be clear and direct. You have no patience for circuitous routes or cluttered corridors. Each room should flow into the next with purpose, allowing you to move through your space with the momentum your nature demands. Dead-ends and awkward transitions will irritate you on a subconscious level.

Your workspace needs to support sudden inspiration. Keep tools of creation within arm's reach—whether that's art supplies, musical instruments, or business planning materials. You work in bursts of intense focus followed by periods of recovery. Design for both: an energising work zone and a distinct restoration area.

Temperature matters enormously to fire signs. You tend to run hot, both literally and metaphorically. Ensure excellent ventilation, multiple options for climate control, and materials that don't retain heat uncomfortably.""",

        "colours": {
            "primary": ["Vermillion Red", "Burnt Orange", "Crimson"],
            "secondary": ["Charcoal", "Gunmetal Grey", "Black"],
            "accent": ["Copper", "Bronze", "Gold Leaf"],
            "specifications": "Primary colours should dominate accent walls and statement furniture. Use in 60-30-10 ratio: neutrals 60%, primary reds 30%, metallics 10%. Vermillion pairs exceptionally with matte black for dramatic contrast. Avoid pastels entirely—they will feel draining to your energy."
        },

        "materials": {
            "metals": {
                "primary": "Brushed Iron",
                "secondary": "Raw Copper",
                "accent": "Antiqued Bronze",
                "finish_notes": "Prefer matte and brushed finishes over high polish. The slight texture reflects your preference for authenticity over perfection. Iron brings grounding energy to fire; copper oxidises beautifully, embracing transformation."
            },
            "stones": {
                "primary": "Red Jasper",
                "secondary": "Carnelian",
                "accent": "Garnet",
                "decorative": "Black Obsidian, Hematite",
                "application": "Use Red Jasper in larger decorative pieces—bookends, desk accessories, or a statement bowl. Carnelian works beautifully as smaller scattered elements. Garnet should appear in intentional, singular placements—one exceptional piece rather than multiples."
            },
            "woods": {
                "primary": "Ebony",
                "secondary": "Walnut with prominent grain",
                "accent": "Charred/Shou Sugi Ban timber",
                "finish": "Matte or satin only—never high gloss. The natural grain should remain visible and tactile.",
                "notes": "Ebony's density and darkness ground fire energy. Charred wood (Shou Sugi Ban) literally carries fire's transformation, making it spiritually aligned with your sign. Use for feature walls, furniture frames, or architectural details."
            },
            "fabrics": {
                "upholstery": "Full-grain leather in oxblood or cognac, heavyweight linen in charcoal",
                "curtains": "Heavy blackout linen in deep rust or iron grey",
                "throws": "Cashmere in burnt orange, alpaca wool in natural charcoal",
                "rugs": "Hand-knotted wool with geometric patterns, cowhide in natural tones",
                "texture_notes": "Prefer substantial, tactile fabrics. Nothing flimsy or delicate. Leather should show natural markings—hide the imperfections speak to your appreciation for authenticity."
            },
            "wall_treatments": {
                "feature": "Venetian plaster in terracotta tones, limewash in warm grey",
                "texture": "Subtle knockdown or skip-trowel texture, raw concrete panels",
                "paint_finish": "Matte or eggshell only. Flat finishes in accent areas.",
                "notes": "One feature wall in textured treatment anchors the space. Remaining walls in solid matte tones. Consider a statement wall in deep charcoal limewash with copper light fixtures."
            },
            "flooring": {
                "primary": "Wide-plank oak with dark stain, polished concrete",
                "secondary": "Terracotta tiles (matte finish), slate",
                "rugs": "Layer with geometric wool rugs in rust, black, and cream"
            },
            "lighting": {
                "general": "Warm white (2700-3000K), dimmable throughout",
                "task": "Adjustable brass or copper desk lamps with matte black details",
                "accent": "Iron chandeliers, copper pendant clusters, candle-style wall sconces",
                "natural": "Maximise natural light; use heavy curtains for drama when desired",
                "notes": "Avoid cool white or fluorescent. Fire signs need warm, flickering light qualities. Consider actual flame—gas fireplaces, quality candle collections, fire pits for outdoor spaces."
            }
        }
    },

    "Taurus": {
        "narrative": """The Bull embodies fixed earth—the stabilising force that transforms chaos into order, potential into manifestation, ideas into tangible reality. This is the energy of the garden that grows through patient tending, the fortune that builds through careful stewardship, the relationship that deepens through consistent presence. Taurus understands that the most valuable things cannot be rushed.

Your essential nature seeks permanence in a world of constant change. This is not resistance to growth but rather the wisdom to recognise what deserves preservation. You are the keeper of what matters—the traditions that bind generations, the values that survive trends, the pleasures that never lose their power to satisfy. While others chase novelty, you cultivate depth.

The sensory world is your native language. You experience life through the body more completely than most: the weight of quality fabric against skin, the first sip of exceptional wine, the particular satisfaction of soil under fingernails. This is not mere hedonism but a spiritual practice—you understand that the divine expresses through the material, and that conscious pleasure is a form of prayer.

The shadow of Taurus emerges as possessiveness—the belief that security requires control, that love means ownership, that change equals loss. Your spiritual work involves developing the faith that what is truly yours cannot be taken, that releasing grip often strengthens bonds, that your worth exists independent of what you accumulate.""",

        "interior_blueprint": """Your home must engage every sense while providing the unshakeable foundation your nature requires. This is not merely a dwelling but a sensory temple—a carefully curated environment where beauty, comfort, and quality converge to support your fullest flourishing. Every surface should reward touch; every view should satisfy the eye; every room should carry a subtle, pleasing scent.

Investment in quality over quantity is your fundamental principle. You would rather have one exceptional piece of furniture than five adequate ones. This is not extravagance but wisdom—you understand that cheap items drain energy through constant replacement, disappointment, and the subtle wrongness of poor materials. Buy once, buy well.

The kitchen deserves particular attention. For Taurus, this is likely the true heart of the home—a place of creation, nourishment, and sensory delight. Invest in excellent tools, ample counter space, and materials that improve with use. This room should accommodate both daily cooking and elaborate entertaining.

Texture variety prevents the fixed earth tendency toward stagnation. While you crave stability, monotony dulls your senses. Layer smooth against rough, warm against cool, structured against organic. The interplay keeps your environment alive and your senses engaged.""",

        "colours": {
            "primary": ["Forest Green", "Sage", "Deep Moss"],
            "secondary": ["Cream", "Warm Taupe", "Caramel"],
            "accent": ["Rose Gold", "Blush Pink", "Copper"],
            "specifications": "Earth tones create your foundational palette. Layer multiple greens of varying depths—botanical references are always appropriate. Rose gold metallics bring Venus's influence without disrupting the grounded feel. Avoid stark whites; prefer cream, ivory, or warm stone tones."
        },

        "materials": {
            "metals": {
                "primary": "Rose Gold (copper-gold alloy)",
                "secondary": "Brushed Brass (unlacquered, living finish)",
                "accent": "Antiqued Copper",
                "finish_notes": "Prefer warm-toned metals that develop patina. Living finishes that change with time honour Taurus's relationship with the enduring. Unlacquered brass that deepens over years will satisfy your appreciation for things that improve with age."
            },
            "stones": {
                "primary": "Rose Quartz (large specimens)",
                "secondary": "Emerald (in decorative objects or jewellery storage)",
                "accent": "Green Aventurine, Jade",
                "surfaces": "Carrara marble (honed finish), Calacatta for statement pieces, soapstone for kitchen surfaces",
                "application": "Rose Quartz should appear in the bedroom—bedside specimens or a bowl for nightstand. Emerald, even small pieces, carries concentrated Venus energy. Marble surfaces in kitchen and bath honour your love of natural luxury."
            },
            "woods": {
                "primary": "White Oak (quarter-sawn)",
                "secondary": "Maple with natural figuring",
                "accent": "Olive wood for decorative objects",
                "finish": "Natural oil finish that develops patina. Hand-rubbed beeswax for antiques.",
                "notes": "Quarter-sawn oak's cathedral grain pattern adds visual interest while the wood itself ages beautifully over decades. Olive wood's irregular patterns and warm tones satisfy your sensory appreciation."
            },
            "fabrics": {
                "upholstery": "Mohair velvet in forest green, full-grain leather that ages gracefully, heavyweight Belgian linen",
                "curtains": "Linen-cotton blend with subtle weight, silk-lined for temperature regulation",
                "throws": "Cashmere in cream and sage, merino wool blankets, faux fur in natural tones",
                "bedding": "Long-staple Egyptian cotton (400+ thread count minimum), silk pillowcases, linen duvet covers",
                "rugs": "Hand-tufted wool in organic patterns, vintage Persian in green-cream palettes",
                "texture_notes": "Everything must pass the touch test. Reject anything that feels synthetic, scratchy, or thin. Your fabrics should make guests ask what they are—quality announces itself."
            },
            "wall_treatments": {
                "feature": "Grasscloth wallcovering (natural sisal or seagrass), limewash in sage",
                "texture": "Subtle organic texture—nothing too busy or distracting",
                "paint_finish": "Eggshell for depth, matte for ceilings",
                "notes": "Grasscloth adds subtle texture and organic quality without demanding attention. The natural fibres ground the space while providing visual interest."
            },
            "flooring": {
                "primary": "Wide-plank white oak (natural or light stain), reclaimed oak with original patina",
                "secondary": "Honed marble in bathrooms, terracotta tiles in kitchen",
                "rugs": "Layer generously—wool beneath feet throughout"
            },
            "lighting": {
                "general": "Very warm white (2400-2700K), always dimmable",
                "task": "Brass desk lamps with fabric shades, adjustable pendants over workspaces",
                "accent": "Crystal chandeliers (vintage preferred), rose gold pendants, abundant candles",
                "natural": "Sheer under-curtains to soften harsh light while maximising luminosity",
                "notes": "Lighting should feel like permanent sunset—golden, soft, flattering. Avoid overhead fluorescents at all costs. Multiple light sources at varying heights create the layered warmth you require."
            }
        }
    },

    "Gemini": {
        "narrative": """The Twins embody mutable air—the quicksilver consciousness that makes connections, carries messages, and refuses to be pinned to any single perspective. This is the energy of synapses firing, of conversations that spark new ideas, of the insatiable curiosity that sees every answer as the beginning of a new question. Gemini understands that truth has many faces and wisdom lies in holding multiple viewpoints simultaneously.

Your essential nature is that of the eternal student and teacher combined. You gather information across every domain, making unlikely connections between disparate fields, translating complex concepts into accessible understanding. Your mind moves faster than most can follow, leaping from topic to topic in ways that seem scattered to linear thinkers but actually follow an associative logic that recognises hidden patterns.

Communication is your superpower and your challenge. Words are your medium, and you wield them with exceptional skill—but this facility can become a substitute for depth. Your spiritual work involves learning when to stop gathering and start integrating, when silence serves better than speech, when commitment deepens rather than limits experience.

The shadow of Gemini emerges as superficiality—the butterfly mind that touches everything deeply enough to seem knowledgeable but never stays long enough to transform. True mastery requires the focus your nature resists. The mature Gemini learns that some conversations require years, that some knowledge cannot be acquired quickly, and that the most important truths resist articulation.""",

        "interior_blueprint": """Your space must accommodate a mind that cannot stay still—providing variety, stimulation, and flexibility while somehow also supporting the focus and completion your nature needs to develop. This is the home of the perpetual student, the social connector, the person who needs room for seventeen different projects in various stages of completion.

Zones are essential. Your mind functions by context-switching, and your home should support this with clearly delineated areas for different activities. Reading zone. Creation zone. Social zone. Quiet zone. The transitions between these areas help your mind shift gears, providing the external structure that supports internal focus.

Visual interest prevents the restlessness that can sabotage your peace. Your eye needs places to land, things to notice, changing elements that reward attention. But this must be curated rather than chaotic—interesting, not overwhelming. The line between stimulation and stress is one you must watch carefully.

Your social nature requires spaces that flex easily from solitary to populated. Moveable seating, extendable tables, guest accommodations that don't require major reconfiguration. Your home will regularly fill with people, ideas, and impromptu gatherings. Design for spontaneity.""",

        "colours": {
            "primary": ["Citrine Yellow", "Electric Blue", "Spring Green"],
            "secondary": ["Pure White", "Light Grey", "Silver"],
            "accent": ["Orange", "Lavender", "Mint"],
            "specifications": "Bright, clear colours that energise without overwhelming. Yellow stimulates mental activity; blue supports communication. Use white and silver as background to let accent colours pop. You can handle more colour variety than most signs—your mind enjoys the visual complexity."
        },

        "materials": {
            "metals": {
                "primary": "Polished Chrome",
                "secondary": "Brushed Aluminium",
                "accent": "Mercury glass, mirrored surfaces",
                "finish_notes": "Reflective metals capture your quicksilver nature. Mercury glass's luminous quality reflects your ruling planet. Keep finishes light and bright—avoid heavy oxidised or antiqued metals."
            },
            "stones": {
                "primary": "Clear Quartz (clusters and points)",
                "secondary": "Citrine",
                "accent": "Blue Lace Agate, Aquamarine",
                "decorative": "Labradorite (for its colour-shifting quality)",
                "application": "Clear Quartz clusters in workspace support mental clarity. Citrine in creative zones encourages joyful expression. Labradorite's shifting colours mirror your multifaceted nature."
            },
            "woods": {
                "primary": "Ash (blonde finish)",
                "secondary": "Birch",
                "accent": "Bamboo",
                "finish": "Light, natural finish or pale whitewash",
                "notes": "Light woods keep energy moving. Bamboo's rapid growth resonates with your quick nature. Avoid dark, heavy woods that can feel oppressive to your airy energy."
            },
            "fabrics": {
                "upholstery": "Lightweight cotton canvas, linen in bright colours, durable performance fabrics for easy cleaning",
                "curtains": "Sheer voile layers, light cotton that moves with air",
                "throws": "Cotton waffle weave, lightweight cashmere, bamboo blend blankets",
                "rugs": "Flat-weave cotton rugs (easily changeable), modular carpet tiles",
                "texture_notes": "Nothing too heavy or committed. Fabrics should be easy to change as your interests shift. Washability matters—your social life generates wear."
            },
            "wall_treatments": {
                "feature": "Magnetic chalkboard paint for one wall, changeable gallery systems",
                "texture": "Smooth finishes that allow easy updates",
                "paint_finish": "Satin for durability and easy cleaning",
                "notes": "Your walls should function as active space—for notes, inspiration, changing artwork. Install picture rail or gallery systems that allow effortless rearrangement."
            },
            "flooring": {
                "primary": "Pale oak or birch hardwood, polished concrete in light grey",
                "secondary": "Light terrazzo, pale limestone in entry",
                "rugs": "Easily changeable flat-weave rugs in bright colours"
            },
            "lighting": {
                "general": "Bright daylight-balanced (4000K) for workspaces, warmer for social areas",
                "task": "Adjustable LED desk lamps, articulating arm fixtures",
                "accent": "Geometric pendant lights, LED strip lighting for flexibility, smart bulbs with colour changing",
                "natural": "Maximise with minimal window treatments, skylights ideal",
                "notes": "Bright spaces support your mental energy. Smart lighting that you can adjust for different activities serves your need for flexibility. Natural light is essential—avoid basement or dark interior rooms."
            }
        }
    },

    "Cancer": {
        "narrative": """The Crab carries its home upon its back—an apt metaphor for the cardinal water sign that understands sanctuary as both physical space and emotional state. This is the energy of the protective shell, the nurturing embrace, the fierce defense of what one loves. Cancer embodies the primordial bond between mother and child, between home and heart, between memory and identity.

Your essential nature is that of the keeper of emotional truth. While others may dismiss feelings as irrational, you understand that emotions carry intelligence that logic cannot access. Your extraordinary memory preserves not just facts but the feeling-tone of experiences, allowing you to navigate present situations using the wisdom of accumulated emotional experience.

The home is your power center. Unlike signs who find themselves in the outer world, you discover your fullest expression within walls you have made your own. Creating sanctuary is not a hobby but a spiritual calling—you understand that the quality of our private spaces fundamentally shapes the quality of our lives. When your home is right, everything else falls into place.

The shadow of Cancer emerges as clinging—the protective impulse becoming possessive, the nurturing instinct becoming controlling, the shell becoming a prison. Your spiritual work involves learning that true security is internal, that holding tightly often pushes away what you seek to keep, and that the past's role is to inform, not imprison.""",

        "interior_blueprint": """Your home is not merely a dwelling but a sanctuary—a physical manifestation of emotional safety that supports your deepest wellbeing. Every design choice should answer the question: does this make me feel held? The Cancer home must nurture everyone who enters while providing you with the restorative privacy your sensitive nature requires.

Softness is non-negotiable. Hard edges, stark surfaces, and minimalist austerity will drain you. You need rooms that embrace—that curve rather than corner, that cushion rather than expose. This doesn't mean cluttered or fussy, but it does mean nothing cold, nothing harsh, nothing that fails to comfort.

Privacy gradients matter enormously. You need public spaces comfortable enough for intimate entertaining, and private spaces invisible to guests. The ability to retreat without explanation, to disappear into your shell when emotional weather demands it, is essential to your mental health. Design clear boundaries between social and sanctuary zones.

Memory deserves physical space. Family photographs, inherited objects, souvenirs of meaningful experiences—these are not clutter but anchors. Create intentional display systems that honour your relationship with the past while preventing overwhelming accumulation.""",

        "colours": {
            "primary": ["Pearl White", "Silver Grey", "Seafoam"],
            "secondary": ["Blush", "Cream", "Soft Sage"],
            "accent": ["Moonstone iridescence", "Mother of Pearl shimmer", "Pale Lavender"],
            "specifications": "Lunar colours dominate—soft, reflective, soothing. Silver over gold. White should be warm, never stark. The iridescent quality of moonstone and pearl should guide your metallics—subtle shimmer rather than high shine. Layer soft colours rather than contrasting boldly."
        },

        "materials": {
            "metals": {
                "primary": "Sterling Silver",
                "secondary": "White Gold, Platinum",
                "accent": "Mother of Pearl inlay, Moonstone settings",
                "finish_notes": "Cool-toned metals honouring lunar rulership. Brushed or satin finishes over high polish—soft glow rather than sharp reflection. Mother of pearl buttons, handles, and inlays bring your signature iridescence."
            },
            "stones": {
                "primary": "Moonstone (rainbow and white)",
                "secondary": "Pearl (natural, various sizes)",
                "accent": "Rose Quartz, Selenite",
                "decorative": "Abalone shell, sea glass collections",
                "application": "Moonstone is your power stone—keep specimens in bedroom and personal spaces. Pearls can appear throughout as decorative elements. Selenite wands for energetic clearing. Abalone shell for bathroom and water-adjacent spaces."
            },
            "woods": {
                "primary": "Driftwood (reclaimed, natural finish)",
                "secondary": "Whitewashed Oak",
                "accent": "Willow, wicker, rattan",
                "finish": "Weathered, whitewashed, or limed. Soft grey-toned stains.",
                "notes": "Water-touched or water-adjacent wood resonates with your element. Driftwood's organic curves suit your preference for soft edges. Woven elements (willow, rattan) add texture while maintaining airiness."
            },
            "fabrics": {
                "upholstery": "Chenille in cream and pearl, velvet in soft grey, slipcovered furniture for easy updating",
                "curtains": "Layered sheers for privacy with light, silk blend drapes in silver-grey",
                "throws": "Cashmere in ivory and blush, faux fur in cream, chunky knit wool",
                "bedding": "Highest quality cotton or linen, down comforters, multiple pillow layers",
                "rugs": "Ultra-plush high-pile wool, sheepskin by beds and seating",
                "texture_notes": "Prioritise softness above all. Every seated surface should embrace. Multiple throw pillows, abundant blankets. The home should feel like being held."
            },
            "wall_treatments": {
                "feature": "Fabric-covered walls in soft grey or blush, acoustic panels with subtle texture",
                "texture": "Smooth plaster with gentle undulation, soft to touch",
                "paint_finish": "Matte or flat finish throughout—no shine",
                "notes": "Sound absorption matters for your sensitive nature. Consider fabric walls in bedroom for both acoustics and softness. Avoid anything cold or hard in surface treatment."
            },
            "flooring": {
                "primary": "Whitewashed hardwood, pale grey engineered oak",
                "secondary": "Pale natural stone with underfloor heating (essential—cold floors disturb you)",
                "rugs": "Wall-to-wall softness wherever possible, layered throughout"
            },
            "lighting": {
                "general": "Warm white (2700K), always dimmable, indirect when possible",
                "task": "Soft glow reading lamps with fabric shades, adjustable bedside lights",
                "accent": "Selenite lamps, salt lamps, fairy lights, candles throughout",
                "natural": "Filtered through sheers—direct harsh light feels invasive",
                "notes": "Moonlight quality throughout. Nothing harsh or clinical. Multiple low lights rather than single overhead. Circadian rhythm support essential—dim in evenings, gradually brightening in morning."
            }
        }
    },

    "Leo": {
        "narrative": """The Lion rules with fixed fire—the sustained brilliance of the sun at zenith, radiating light that illuminates, warms, and commands attention. This is the energy of creative expression, generous leadership, and the courage to be wholly, unapologetically oneself. Leo understands that dimming one's light serves no one, and that authentic self-expression is both personal gift and collective contribution.

Your essential nature demands recognition not from ego but from spiritual necessity. Just as the sun cannot help but shine, you cannot authentically suppress your radiance. The question is never whether to express yourself but how—with generosity or narcissism, with warmth or aggression, with creative fire that illuminates others or flames that consume. Your work is directing this considerable power toward noble ends.

Creativity flows through you like breath. Whether or not you identify as an artist, you possess the creator's orientation toward reality—the understanding that what exists can be transformed, that beauty can be made, that your vision matters enough to manifest. You may express this through traditional arts, through leadership, through parenting, through any field that allows you to leave your distinctive mark.

The shadow of Leo emerges as tyranny—when the need for recognition becomes desperate, when generosity carries hidden strings, when the throne matters more than the kingdom. Your spiritual work involves developing the security that allows genuine humility—understanding that your light is not diminished when others shine, and that the greatest leaders create more leaders, not more followers.""",

        "interior_blueprint": """Your home must be a palace—not necessarily in scale, but in intention. Every space should reflect sovereignty, creativity, and the warmth of the generous host. This is where you restore from giving, where you create from inspiration, where you receive the appreciation your nature requires. Compromise on nothing that touches your dignity.

Drama serves you. While some signs need subtle environments, you thrive with bold statements, theatrical gestures, and unmistakable luxury. This isn't about expense but about intention—everything in your space should look like it was chosen, not settled for. Generic furnishings and timid design choices drain your vital energy.

The creative zone deserves priority square footage. Whether you paint, write, compose, or craft business empires, you need space dedicated to making. This area should inspire the moment you enter—filled with light, equipped with quality tools, arranged to support flow. Your creative work is not a hobby but a calling.

Entertainment capacity is essential. You are a natural host, and your home should support gathering. Consider flow patterns for parties, seating arrangements for conversations, kitchen capacity for feasts. Your home will regularly become a stage, and you are its natural center.""",

        "colours": {
            "primary": ["Regal Purple", "Royal Blue", "Crimson"],
            "secondary": ["Gold", "Warm White", "Rich Cream"],
            "accent": ["Orange", "Magenta", "Bronze"],
            "specifications": "Jewel tones dominate—nothing washed out or tentative. Purple carries royalty; gold brings solar power. Use metallic gold generously—this is your signature. The overall impression should be warm, rich, and unmistakably confident."
        },

        "materials": {
            "metals": {
                "primary": "Gold (polished, high shine)",
                "secondary": "Brass (polished to brilliance)",
                "accent": "Bronze, Copper",
                "finish_notes": "High polish reflects your solar rulership. Nothing matte or humble—you want surfaces that catch and throw light. Gold leaf details on furniture and frames. Avoid silver—it's lunar energy that doesn't resonate."
            },
            "stones": {
                "primary": "Tiger's Eye (golden)",
                "secondary": "Citrine (natural, heated)",
                "accent": "Sunstone, Amber",
                "decorative": "Pyrite clusters (fool's gold), Golden Rutilated Quartz",
                "application": "Tiger's Eye combines solar energy with grounding—essential for Leo. Large Citrine points in creative spaces attract abundance and joy. Amber preserves ancient solar energy. Display prominently."
            },
            "woods": {
                "primary": "Mahogany (rich red-brown)",
                "secondary": "Cherry (natural red tones)",
                "accent": "Goldleaf details on furniture edges",
                "finish": "High gloss or French polish. Show the depth of rich wood grain.",
                "notes": "Substantial, dignified woods with warmth and presence. Mahogany's commanding presence suits your nature. Gold leaf details on furniture edges and frames bring palatial quality."
            },
            "fabrics": {
                "upholstery": "Silk velvet in jewel tones, brocade with metallic thread, supple leather in warm cognac",
                "curtains": "Heavy silk or velvet drapes with gold-toned hardware and tiebacks",
                "throws": "Cashmere in deep purple or crimson, faux fur in golden tones",
                "bedding": "Silk or high-thread-count cotton with metallic accent pillows, canopy if scale allows",
                "rugs": "Antique Persian in warm colours, custom designs featuring lion motifs",
                "texture_notes": "Sumptuous textures that announce quality. Silk and velvet are your signature fabrics. Nothing cheap, scratchy, or apologetic."
            },
            "wall_treatments": {
                "feature": "Gold leaf accent wall or ceiling detail, damask wallpaper in purple or gold",
                "texture": "Subtle texture that reads as luxury, Venetian plaster with metallic pigments",
                "paint_finish": "Satin finish for subtle glow, high gloss for drama in smaller spaces",
                "notes": "One statement wall can transform a room. Consider gold leaf on ceiling detail or crown molding. Damask patterns honour traditional royalty."
            },
            "flooring": {
                "primary": "Dark hardwood (walnut, mahogany) with high polish",
                "secondary": "Marble in entry and bathrooms, intricate tile patterns",
                "rugs": "Statement rugs that draw the eye, medallion patterns in warm colours"
            },
            "lighting": {
                "general": "Warm white (2700-3000K), dramatic rather than even",
                "task": "Brass desk lamps with substantial presence, gold-finished fixtures",
                "accent": "Crystal chandeliers (essential), wall sconces with crystal drops, picture lights for art",
                "natural": "Abundant—but controlled with quality window treatments",
                "notes": "The chandelier is non-negotiable. Leo homes require at least one statement lighting piece that commands attention. Crystal catches and multiplies light like sunshine. Every room should have a focal fixture."
            }
        }
    },

    "Virgo": {
        "narrative": """The Virgin embodies mutable earth—the analytical consciousness that perceives, refines, and perfects. This is the energy of the craftsperson who sees both the whole and every component, the editor who serves the work by making it cleaner, the healer who addresses root causes rather than symptoms. Virgo understands that excellence lives in details, and that true service requires the humility to prioritise function over ego.

Your essential nature seeks order not from rigidity but from understanding. You perceive the patterns underlying chaos and feel compelled to organise, improve, and clarify. This isn't mere tidiness but a spiritual practice—you understand that creating order externally supports clarity internally, and that attending to small things well prepares one for great things.

The body is your sacred text. You likely feel physical responses to environments more acutely than most—the wrong lighting gives you headaches, clutter creates anxiety, disorganisation manifests as physical tension. This sensitivity is a gift that guides you toward increasingly healthful environments and practices.

The shadow of Virgo emerges as criticism—when the eye for improvement becomes inability to appreciate what is, when service becomes martyrdom, when the pursuit of perfection prevents completion. Your spiritual work involves developing the capacity to let things be imperfect, to celebrate good enough, and to direct your analytical powers toward appreciation rather than only improvement.""",

        "interior_blueprint": """Your home must function flawlessly—every system considered, every tool at hand, every surface supporting its purpose. This is the sanctuary where order reigns, where health is supported, where the visual noise of modern life falls away to reveal clean simplicity. Nothing extraneous, nothing broken, nothing that doesn't earn its place.

Systems deserve serious investment. Organisation isn't decoration for you but essential infrastructure. Quality storage solutions, labeled containers, logical zones for every activity. The goal is never having to search for anything, never encountering unexpected chaos. Spend money here.

Material quality matters more than quantity. You would rather have one excellent item than three mediocre ones. Your eye detects poor craftsmanship instantly, and living with it creates constant low-grade irritation. Invest in fewer things, but let those things be the best you can afford.

Health supports are non-negotiable. Air filtration, water purification, non-toxic materials, adequate natural light. Your body reads environmental toxins more quickly than most. Treat your home as a wellness sanctuary and design accordingly.""",

        "colours": {
            "primary": ["Sage Green", "Wheat", "Soft Grey"],
            "secondary": ["Clean White", "Natural Linen", "Stone"],
            "accent": ["Forest Green", "Terracotta", "Navy"],
            "specifications": "Natural, unforced colours that could occur in nature. Nothing artificial or synthetic-looking. Muted tones over bright—sophistication over drama. The palette should feel restful to your analytical mind."
        },

        "materials": {
            "metals": {
                "primary": "Brushed Nickel",
                "secondary": "Stainless Steel (brushed finish)",
                "accent": "Antiqued Brass for warmth",
                "finish_notes": "Clean, functional metals that don't show fingerprints or require excessive maintenance. Brushed finishes over high polish. Nothing ornate—simple, quality hardware throughout."
            },
            "stones": {
                "primary": "Green Moss Agate",
                "secondary": "Clear Quartz (for clarity)",
                "accent": "Amazonite, Peridot",
                "surfaces": "Honed natural stone (carrara, limestone), soapstone for workspaces (naturally antibacterial)",
                "application": "Green Moss Agate supports connection to earth element. Clear Quartz on desk enhances mental clarity. Soapstone's natural antimicrobial properties appeal to your health consciousness."
            },
            "woods": {
                "primary": "White Oak (quarter-sawn for stability)",
                "secondary": "Maple (tight grain, light colour)",
                "accent": "Cork for functional applications",
                "finish": "Natural oil finishes, matte polyurethane for durability",
                "notes": "Clean-grained woods that age predictably. Quarter-sawn oak's stability suits your preference for reliability. Cork provides sustainable, antimicrobial surface options."
            },
            "fabrics": {
                "upholstery": "Organic cotton canvas, performance linen (stain-resistant), quality wool",
                "curtains": "Linen in natural tones, functional blackout lining where needed",
                "throws": "Organic wool blankets, linen throws",
                "bedding": "Organic cotton in high thread count, linen sheets, wool mattress topper",
                "rugs": "Flat-weave natural fibre (easy to clean), organic wool",
                "texture_notes": "Natural fibres only where possible. Washability matters. Nothing that traps dust or off-gasses. OEKO-TEX certified where available."
            },
            "wall_treatments": {
                "feature": "Shiplap in warm white (creates texture without pattern)",
                "texture": "Smooth, clean surfaces that wipe easily",
                "paint_finish": "Eggshell (washable, subtle sheen)",
                "notes": "Zero-VOC paints throughout. Consider limewash for natural antimicrobial properties and breathability. Simple treatments—nothing fussy or hard to maintain."
            },
            "flooring": {
                "primary": "Engineered hardwood (stable, sustainable), FSC-certified",
                "secondary": "Natural stone with radiant heat, cork for standing workspaces",
                "rugs": "Natural fibre, easily cleaned, no excessive pile to trap allergens"
            },
            "lighting": {
                "general": "Full-spectrum daylight-balanced (4000-5000K) for work areas, warmer for relaxation",
                "task": "Adjustable, high-quality LED with excellent colour rendering",
                "accent": "Simple, functional fixtures in brushed metals",
                "natural": "Maximised—circadian rhythm support matters to your health",
                "notes": "Quality lighting is health infrastructure. Invest in fixtures with excellent colour rendering (CRI 95+). Smart lighting to shift temperature throughout the day. Never compromise on light quality."
            }
        }
    },

    "Libra": {
        "narrative": """The Scales embody cardinal air—the relational consciousness that seeks balance, creates beauty, and understands that everything exists in connection. This is the energy of the diplomat who sees all perspectives, the aesthete who perceives harmony as essential rather than optional, the partner who understands that relationship is the fundamental nature of reality. Libra knows that how things appear matters because beauty is a form of truth.

Your essential nature seeks equilibrium in all things. This isn't indecision but rather the perception of valid truths on multiple sides, the understanding that harmony requires weighing rather than dismissing. Your challenge is not to see both sides—you do that automatically—but to act despite this seeing, understanding that choosing does not require condemning what you didn't choose.

Beauty is your spiritual practice. Where others may tolerate ugliness, disharmony grates on your soul like a sustained discordant note. This isn't superficial—you understand that aesthetic choices reflect and shape consciousness, that living surrounded by beauty elevates the spirit, that neglecting appearance neglects something essential. Your commitment to aesthetics is a form of ethics.

The shadow of Libra emerges as peace-keeping that becomes people-pleasing, as consideration that becomes paralysis, as partnership-seeking that becomes loss of self. Your spiritual work involves developing the capacity to stand alone, to tolerate discord when necessary, and to make decisions that not everyone will approve of.""",

        "interior_blueprint": """Your home must be a symphony of visual harmony—every element consciously placed, every relationship between objects considered, every colour and proportion weighed for balance. This is not merely a living space but a work of art in which you dwell. Anything that disrupts harmony must go, no matter its other qualities.

Symmetry provides the foundation but not the entirety of your aesthetic. You understand the power of perfect balance, but also the interest created by intentional asymmetry—the single object that breaks an otherwise perfect pattern, drawing the eye and preventing monotony. Master both.

Quality over quantity is your principle. You would rather have empty space than fill it with the wrong thing. The perfect object is worth waiting for. Never settle simply because nature abhors a vacuum—your nature abhors the wrong thing more than it abhors emptiness.

Social spaces deserve your primary attention. As a relationship-oriented sign, you need entertaining areas that support conversation, connection, and mutual appreciation. The single-person spaces can be simple; the shared spaces must be perfect.""",

        "colours": {
            "primary": ["Dusty Rose", "Soft Blue", "Cream"],
            "secondary": ["Blush Pink", "Powder Blue", "Warm Taupe"],
            "accent": ["Copper", "Gold", "Soft Green"],
            "specifications": "Soft, balanced palette with no jarring notes. Pairs should feel inevitable—dusty rose with soft blue creates perfect tension. Venus rulership brings blush tones. The overall impression should be of sophisticated calm."
        },

        "materials": {
            "metals": {
                "primary": "Rose Gold",
                "secondary": "Brushed Brass (warm, not yellow)",
                "accent": "Copper in considered doses",
                "finish_notes": "Venus-ruled metals in warm tones. Rose gold brings modern romance; brass brings classic warmth. Pair carefully—mixing metals requires skill. Generally stick to one family per room."
            },
            "stones": {
                "primary": "Rose Quartz (the love stone)",
                "secondary": "Blue Lace Agate (for communication)",
                "accent": "Lepidolite (lavender tones), Kunzite",
                "surfaces": "Rosa Portugués marble, pale grey Carrara, rose-veined onyx",
                "application": "Rose Quartz belongs throughout—bedside, living room, anywhere connection happens. Blue Lace Agate supports the communication your sign craves. Rose-toned marble surfaces carry Venus energy."
            },
            "woods": {
                "primary": "American Walnut (warm brown, refined grain)",
                "secondary": "Cherry (warm with slight red undertone)",
                "accent": "Rosewood for special pieces (sustainably sourced)",
                "finish": "Satin finishes—not matte (too casual), not high gloss (too obvious)",
                "notes": "Warm-toned woods that read as refined rather than rustic. Walnut's consistent grain suits your preference for harmony. Rosewood's name alone connects to your Venus rulership."
            },
            "fabrics": {
                "upholstery": "Silk velvet in dusty rose and soft blue, heavyweight cotton in warm neutrals, supple leather in blush",
                "curtains": "Silk dupioni, lined and weighted to hang perfectly, puddling slightly on floor",
                "throws": "Cashmere in coordinated colours, mohair with subtle sheen",
                "bedding": "Silk or highest-quality cotton, coordinated (never mismatched)",
                "rugs": "Vintage Persian in rose-blue-cream palette, high-quality hand-knotted contemporary",
                "texture_notes": "Refined textures throughout. Nothing rough, nothing too casual. Fabrics should feel as beautiful as they look."
            },
            "wall_treatments": {
                "feature": "Venetian plaster in soft grey or blush, subtle damask wallpaper",
                "texture": "Refined but not sterile—slight warmth and depth",
                "paint_finish": "Satin for most spaces, eggshell in bedrooms",
                "notes": "Walls should provide perfect backdrop. Crown molding and traditional details appeal to your refined eye. Consider chair rail and picture molding for classical proportions."
            },
            "flooring": {
                "primary": "Wide-plank walnut or oak (medium stain), herringbone pattern",
                "secondary": "Marble in entry and bathrooms (pale with soft veining)",
                "rugs": "Statement rugs in proportional sizes—never too small for the room"
            },
            "lighting": {
                "general": "Warm white (2700-3000K), layered and considered",
                "task": "Elegant brass or rose gold lamps with quality shades",
                "accent": "Crystal and glass fixtures that diffuse light beautifully, sculptural pendants",
                "natural": "Softened through quality window treatments—never harsh",
                "notes": "Lighting placement should create balance—flanking lamps in pairs, fixtures centered on tables, nothing randomly placed. Crystal fixtures scatter light harmoniously."
            }
        }
    },

    "Scorpio": {
        "narrative": """The Scorpion embodies fixed water—the deepest currents of emotional and psychological reality, flowing in darkness, transforming whatever it touches. This is the energy of the analyst who perceives hidden motivations, the transformer who enables death and rebirth, the keeper of secrets who understands that some truths require darkness to survive. Scorpio knows that what appears on the surface is never the whole story.

Your essential nature penetrates beneath appearances. Where others accept the presented reality, you automatically perceive what's hidden, denied, or suppressed. This isn't paranoia but perception—you simply see what others choose not to notice. Your challenge is not developing this perception but deciding what to do with it, and maintaining compassion despite what you see.

Intensity is your natural register. Half-measures, superficial connections, and casual commitments have no place in your experience. When you engage, you engage completely—for better or worse. This creates relationships of extraordinary depth but also the potential for obsession, control, and difficulty letting go when endings arrive.

The shadow of Scorpio emerges as manipulation—using your perception of others' vulnerabilities as leverage, conflating intimacy with control, wielding secrets as weapons. Your spiritual work involves learning to forgive, to release, and to trust that your power remains intact even when you don't exercise it.""",

        "interior_blueprint": """Your home must be a sanctuary of privacy and depth—a place of shadows and revelation, of secrets kept and transformations undertaken. This is not merely a residence but a lair, a cave, a protected space where your true nature can unfold without performance or protection. Nothing exposed, nothing superficial, nothing that doesn't carry weight.

Privacy is not a preference but a requirement. You need spaces where you cannot be observed, surprised, or intruded upon. Consider sightlines carefully—rooms that can be secured, windows that cannot be peered into, a layout that reveals nothing to casual visitors. Your interior life deserves protection.

Depth manifests spatially. You may be drawn to underground spaces, rooms within rooms, hidden areas known only to you. If architecture permits, consider a private study, a meditation chamber, a space that exists only for your solitary transformation. The psyche has rooms; your home can too.

Quality and permanence trump fashion. You want objects that carry weight—both literally and metaphorically. Antiques with history, art with meaning, furniture that will outlast you. Nothing trendy, nothing meant to be replaced. What you choose, you choose permanently.""",

        "colours": {
            "primary": ["Black", "Burgundy", "Deep Purple"],
            "secondary": ["Charcoal", "Wine", "Midnight Blue"],
            "accent": ["Gold", "Copper", "Blood Red"],
            "specifications": "Dark, saturated colours that absorb rather than reflect light. Black as a foundational colour, not just accent. Burgundy carries Pluto's transformative blood. Gold accents bring necessary illumination to the darkness."
        },

        "materials": {
            "metals": {
                "primary": "Blackened Steel",
                "secondary": "Antiqued Bronze (near black)",
                "accent": "Gold (in darkness, it glows)",
                "finish_notes": "Dark metals that absorb light. Blackened steel's industrial permanence suits your nature. Gold accents provide necessary contrast—like light in a cave."
            },
            "stones": {
                "primary": "Obsidian (black volcanic glass)",
                "secondary": "Black Tourmaline (protective)",
                "accent": "Garnet (blood red), Labradorite (for its hidden fire)",
                "surfaces": "Black granite with subtle flash, Belgian Black marble, dark soapstone",
                "application": "Obsidian mirrors ancient scrying practices—place near meditation areas. Black Tourmaline protects boundaries. Labradorite's hidden iridescence mirrors your hidden depths."
            },
            "woods": {
                "primary": "Ebony (true black wood)",
                "secondary": "Walnut (darkest stain)",
                "accent": "Charred/Shou Sugi Ban timber",
                "finish": "Matte or low sheen—nothing that reflects light unnecessarily",
                "notes": "Dense, dark woods that absorb light and anchor spaces. Shou Sugi Ban (charred wood) carries transformation in its creation process—fire making water-resistant permanence."
            },
            "fabrics": {
                "upholstery": "Full-grain leather in black or oxblood, silk velvet in burgundy and midnight",
                "curtains": "Heavy velvet blackout drapes in black or wine",
                "throws": "Cashmere in charcoal and wine, heavyweight wool",
                "bedding": "Egyptian cotton in charcoal or deep purple, silk in black",
                "rugs": "Persian in dark reds and blues, hand-knotted wool in deep tones",
                "texture_notes": "Substantial fabrics that absorb sound and light. Velvet's capacity to shift between light and dark suits your nature. Nothing sheer or revealing."
            },
            "wall_treatments": {
                "feature": "Venetian plaster in black or charcoal, dark wood paneling, textured stone",
                "texture": "Depth and shadow—nothing flat or featureless",
                "paint_finish": "Matte or flat—no shine, no reflection",
                "notes": "Walls should absorb rather than reflect. Consider leather wall panels for ultimate luxury and sound absorption. Wood paneling creates appropriate gravitas."
            },
            "flooring": {
                "primary": "Ebonised oak, dark stained hardwood with matte finish",
                "secondary": "Black slate, dark Belgian Blue limestone",
                "rugs": "Deep-toned Persians, dark contemporary pieces with subtle pattern"
            },
            "lighting": {
                "general": "Warm but not bright (2700K), always on dimmers, indirect",
                "task": "Focused pools of light rather than ambient illumination",
                "accent": "Candles (essential), low-placed uplighting, fire (fireplace, fire pit)",
                "natural": "Controlled and filterable—you may prefer lower light",
                "notes": "Light should be a tool you control rather than a constant presence. Dimmers on everything. Candles and firelight carry essential transformative energy. Never fluorescent, never overhead without control."
            }
        }
    },

    "Sagittarius": {
        "narrative": """The Archer embodies mutable fire—the expansive consciousness that seeks meaning, adventure, and the horizon beyond every horizon. This is the energy of the philosopher who asks why, the explorer who must see for themselves, the teacher who transmits not just information but vision. Sagittarius understands that growth requires movement, that comfort kills, and that truth is vast enough to warrant lifelong pursuit.

Your essential nature seeks expansion in all directions. Physical travel satisfies something deep, but so does intellectual journey—the exploration of ideas, systems, beliefs, and possibilities. You are equally at home discussing philosophy with a stranger in a foreign café as you are trekking through wilderness. Both are expressions of your fundamental need to transcend the familiar.

Optimism flows through you like an underground river. Even when circumstances darken, something in you insists that meaning exists, that tomorrow holds promise, that the universe ultimately bends toward growth. This isn't naïveté—you've seen difficulty—but rather a philosophical commitment that sustains you through challenges that collapse more cynical souls.

The shadow of Sagittarius emerges as recklessness—when freedom becomes fear of commitment, when truth-telling becomes tactlessness, when the pursuit of expansion neglects necessary consolidation. Your spiritual work involves learning that freedom includes the freedom to bind yourself to what you love, and that depth sometimes matters more than breadth.""",

        "interior_blueprint": """Your home must breathe—literally and metaphorically. Open space, high ceilings, abundant light, and unobstructed sightlines satisfy your expansion-oriented soul. This is not a place of enclosure but a launchpad, a place to gather energy and stories between adventures, a gallery of where you've been and inspiration for where you're going.

Indoor-outdoor connection is essential. You wilt without nature access, without the ability to step outside immediately, without visual connection to sky and horizon. Design for maximum permeability—large windows, outdoor living spaces, perhaps a home that blurs the boundary between inside and out.

Display your travels. Maps, artifacts, photographs, art collected along the way—these are not clutter but identity for you. Create intentional systems for displaying your journey's evidence, rotating collections as they grow, making your home a museum of your expanding experience.

Flexibility supports your nature better than permanence. Modular furniture, moveable elements, spaces that can transform for different uses. You may relocate, you may host foreign visitors, you may need room for spontaneous ventures. Design for change.""",

        "colours": {
            "primary": ["Royal Purple", "Turquoise", "Amber"],
            "secondary": ["Burnt Orange", "Teal", "Rich Brown"],
            "accent": ["Gold", "Crimson", "Cobalt"],
            "specifications": "Colours of far places—Moroccan spice markets, tropical waters, Tibetan monasteries. Bold, optimistic, warm. World colours rather than Western minimalist palette. Let your home reflect the places you've been and want to go."
        },

        "materials": {
            "metals": {
                "primary": "Polished Brass (warm, adventurous)",
                "secondary": "Hammered Copper (handcrafted quality)",
                "accent": "Mixed metals from travels (Moroccan silver, Indian bronze)",
                "finish_notes": "Handcrafted metals with visible artisan work. Hammered finishes tell stories. Collect metals from travels—each piece with provenance and memory."
            },
            "stones": {
                "primary": "Turquoise (traveler's stone)",
                "secondary": "Lapis Lazuli (blue of distant skies)",
                "accent": "Amethyst (spiritual expansion), Citrine (optimism)",
                "decorative": "Fossils, geodes from travels, unusual specimens collected worldwide",
                "application": "Turquoise is your signature stone—use generously in jewelry, décor, even tiled surfaces. Lapis Lazuli on desks supports writing and teaching. Geodes sliced open reveal inner worlds—appropriate symbolism."
            },
            "woods": {
                "primary": "Reclaimed teak (weathered by elements)",
                "secondary": "Exotic hardwoods from sustainable sources",
                "accent": "Driftwood, salvaged barn wood",
                "finish": "Natural weathered finishes, visible history and imperfection",
                "notes": "Woods that look traveled—weathered, worn, storied. Reclaimed teak from old boats carries literal voyage energy. Avoid pristine new woods; prefer those with visible history."
            },
            "fabrics": {
                "upholstery": "Kilim-covered ottomans, leather that ages with use, handwoven cotton",
                "curtains": "Lightweight natural fibres that move with breeze, possibly open weave",
                "throws": "Blankets collected from travels, handwoven textiles, ethnic patterns",
                "bedding": "Global patterns, ikat, batik, comfortable rather than fussy",
                "rugs": "Kilims, dhurries, Berber carpets, vintage Turkish, Moroccan—collected from source",
                "texture_notes": "Handmade textures from around the world. Nothing machine-perfect. Each textile should tell a story or suggest a journey."
            },
            "wall_treatments": {
                "feature": "Maps (antique or custom), textured plaster with global character",
                "texture": "Imperfect, hand-applied, suggesting artisan work",
                "paint_finish": "Satin or matte, accommodating for hanging collections",
                "notes": "Walls as gallery space for your travels. Hanging systems for easy rotation. Consider one wall dedicated to maps—where you've been, where you're going."
            },
            "flooring": {
                "primary": "Wide-plank reclaimed wood, terracotta tiles (Mediterranean feel)",
                "secondary": "Polished concrete (modern, durable for high traffic)",
                "rugs": "Layered global textiles, vintage rugs with visible wear"
            },
            "lighting": {
                "general": "Warm (2700-3000K), accommodating various activities",
                "task": "Adjustable lamps for reading (you read constantly)",
                "accent": "Moroccan lanterns, Indian brass lamps, collected lighting from travels",
                "natural": "Maximum natural light—you need connection to sun position and weather",
                "notes": "Collected lighting tells stories. Moroccan perforated metal lanterns cast amazing shadows. Indian oil lamps bring ancient fire. Mix eras and origins freely."
            }
        }
    },

    "Capricorn": {
        "narrative": """The Sea-Goat embodies cardinal earth—the patient, strategic consciousness that builds for permanence, understands delayed gratification, and respects tradition while climbing toward achievement. This is the energy of the architect who plans for centuries, the executive who manages with wisdom, the elder who has earned authority through demonstrated competence. Capricorn understands that real power comes from mastery, and mastery comes from discipline applied over time.

Your essential nature orients toward achievement. You think in terms of goals, milestones, structures, and outcomes. This isn't cold ambition but rather the understanding that unstructured potential benefits no one—that genius requires form to manifest, that dreams require strategy to become reality. You provide the form that allows others' visions to land.

Tradition speaks to you because it represents tested wisdom. You don't follow convention blindly, but you respect that practices which survive centuries usually contain truths that novelty hasn't discovered yet. Your natural conservatism isn't resistance to change but rather insistence that change prove its worth before dismantling what works.

The shadow of Capricorn emerges as rigidity—when discipline becomes joylessness, when ambition becomes ruthlessness, when the climb becomes more important than the summit. Your spiritual work involves learning that some rules deserve breaking, that failure can teach more than success, and that love cannot be earned through achievement alone.""",

        "interior_blueprint": """Your home must communicate earned substance—the quiet confidence of success achieved through genuine merit. This is not about display but about quality so evident it needs no announcement. Everything should function perfectly, last indefinitely, and improve with age. Nothing temporary, nothing trendy, nothing that requires apology or explanation.

Investment quality throughout. You understand that cheap things end up costing more through replacement, frustration, and constant inadequacy. Apply this understanding to your home without hesitation. Every piece should be the best you can currently afford, acquired steadily rather than all at once.

Traditional forms suit you better than experimental ones. You appreciate architecture with correct proportions, furniture with proven designs, materials with centuries of history. Innovation for its own sake irritates you; proven elegance satisfies. This doesn't mean museum-piece living—it means trusting what works.

The workspace deserves special attention. You are likely to work at home sometimes, and your productivity depends on professional-quality infrastructure. Invest in desk, chair, lighting, and technology as seriously as an office would. Half-measures in your work environment will frustrate you and impair your output.""",

        "colours": {
            "primary": ["Charcoal Grey", "Deep Brown", "Navy"],
            "secondary": ["Stone", "Slate", "Forest Green"],
            "accent": ["Gold", "Burgundy", "Bronze"],
            "specifications": "Serious, substantial colours that communicate competence. No pastels, no whimsy. Navy and charcoal as foundational neutrals. Gold accents bring necessary warmth without frivolity."
        },

        "materials": {
            "metals": {
                "primary": "Antiqued Brass (patina of age)",
                "secondary": "Burnished Bronze",
                "accent": "Gold leaf details on frames and furniture",
                "finish_notes": "Aged finishes that suggest history. New-looking metals feel too raw for your sensibility. Brass that has developed patina communicates the permanence you value."
            },
            "stones": {
                "primary": "Black Onyx (grounding, structure)",
                "secondary": "Smoky Quartz (transformation through patience)",
                "accent": "Jet, Black Jade, Garnet",
                "surfaces": "Honed black granite, dark verde marble, limestone with fossil inclusions",
                "application": "Black Onyx supports structure and discipline—place in office and entry. Smoky Quartz transforms negative energy through grounded processes. Fossil-bearing limestone reminds of deep time."
            },
            "woods": {
                "primary": "Dark Oak (English or French, aged)",
                "secondary": "Mahogany (traditional furniture)",
                "accent": "Antique wood wherever available",
                "finish": "Traditional finishes—wax, oil, French polish on appropriate pieces",
                "notes": "Woods associated with serious rooms—libraries, boardrooms, studies. Age and patina are assets. Antique furniture often superior to new; consider estate pieces."
            },
            "fabrics": {
                "upholstery": "Traditional leather (Chesterfields, club chairs), heavyweight wool, English cotton chintz (traditional patterns)",
                "curtains": "Lined silk or wool, substantial weight, traditional pleating",
                "throws": "Scottish cashmere, English wool blankets",
                "bedding": "Highest quality cotton, traditional patterns, tailored rather than fussy",
                "rugs": "Antique Persian (investment quality), Aubusson, traditional patterns",
                "texture_notes": "Established quality—fabrics that have proven themselves over centuries. Nothing trendy or experimental. Traditional patterns over modern graphics."
            },
            "wall_treatments": {
                "feature": "Wood paneling (traditional library style), traditional wallpaper with heritage patterns",
                "texture": "Subtle, appropriate—nothing avant-garde",
                "paint_finish": "Eggshell or satin, historically appropriate colours",
                "notes": "Traditional architectural details—crown molding, wainscoting, chair rails. If renovating, consider adding these elements. They communicate the permanence you value."
            },
            "flooring": {
                "primary": "Dark hardwood (possibly parquet in formal rooms)",
                "secondary": "Stone in entries and formal areas",
                "rugs": "Investment-quality antique rugs, properly scaled"
            },
            "lighting": {
                "general": "Warm (2700K), traditional fixtures, appropriate to room formality",
                "task": "Brass banker's lamps, traditional library lighting",
                "accent": "Crystal chandeliers for formal rooms, brass wall sconces",
                "natural": "Controlled with quality window treatments",
                "notes": "Traditional lighting styles—nothing industrial or experimental. Quality brass or bronze fixtures with appropriate shades. Crystal for formal spaces. Library lamps for workspace."
            }
        }
    },

    "Aquarius": {
        "narrative": """The Water-Bearer embodies fixed air—the revolutionary consciousness that perceives what could be, questions what is, and works toward collective evolution. This is the energy of the inventor who solves problems no one knew existed, the humanitarian who sees species-level purpose, the eccentric who recognises that today's madness becomes tomorrow's common sense. Aquarius understands that progress requires willing to stand alone.

Your essential nature orients toward the future. Where others see the present as solid, you perceive its temporary nature—the ways current systems contain their own dissolution, the emerging possibilities most people can't yet imagine. This foresight is both gift and burden: you see so clearly what's coming that you struggle to remain patient with the present.

Independence isn't preference but necessity for you. The conventional life, the expected path, the normal way—these feel like slow death to your soul. You need room for your originality, relationships that don't require conformity, work that allows innovation. Anything that demands you be smaller than you are will eventually become intolerable.

The shadow of Aquarius emerges as detachment—when independence becomes inability to connect, when vision becomes impractical idealism, when the future-focus neglects present relationships and needs. Your spiritual work involves grounding your considerable vision in actual implementation, and remembering that humanity is composed of humans, each deserving individual attention.""",

        "interior_blueprint": """Your home must feel like the future—or at least, like a space where the future is being invented. Technology, innovation, unexpected solutions, and visual statements that provoke thought rather than soothe conventionality. This is the laboratory of new living, where you experiment with how humans might better occupy space.

Technology integration should be seamless and forward-thinking. Smart home systems, innovative materials, energy solutions that anticipate future standards. You're likely an early adopter, and your home should reflect this—not for showing off but because you genuinely prefer better solutions.

Unconventional layouts may serve you better than traditional floor plans. Open plans, unexpected level changes, rooms that serve multiple innovative purposes. If you can design or renovate, challenge assumptions about how space should be organised. Your needs are not typical.

The collective matters in your design thinking. You probably host gatherings oriented around ideas, causes, or innovation. Design for groups while somehow also protecting your necessary solitude. The paradox of being deeply social around ideas while needing substantial alone time is real for Aquarius.""",

        "colours": {
            "primary": ["Electric Blue", "Violet", "Silver"],
            "secondary": ["White", "Grey", "Black"],
            "accent": ["Neon accents", "Iridescent surfaces", "Unexpected colour pops"],
            "specifications": "Futuristic palette—colours that feel forward rather than nostalgic. Electric blue captures Uranus energy. Silver and white create tech-forward backdrop. Unexpected colour moments—a neon accent, an iridescent surface—reflect your unpredictability."
        },

        "materials": {
            "metals": {
                "primary": "Polished Aluminum",
                "secondary": "Chrome",
                "accent": "Titanium, Stainless Steel",
                "finish_notes": "Space-age metals with technical precision. Polished finishes that feel contemporary. Consider unusual metal applications—perhaps as major surface material rather than just hardware."
            },
            "stones": {
                "primary": "Amethyst (intuition, innovation)",
                "secondary": "Clear Quartz (amplifying ideas)",
                "accent": "Labradorite (accessing higher knowledge), Aquamarine",
                "surfaces": "Quartz composite (engineered, innovative), concrete with modern applications",
                "application": "Amethyst supports the intuitive innovation that characterises Aquarian breakthroughs. Labradorite's colour-shifting quality mirrors your capacity for sudden perspective shifts. Engineered surfaces represent human improvement on nature."
            },
            "woods": {
                "primary": "Light woods (Ash, Maple) in bleached or whitewashed finish",
                "secondary": "Reclaimed wood (sustainable choice)",
                "accent": "Bamboo (sustainable, fast-growing)",
                "finish": "Bleached, whitewashed, or natural pale",
                "notes": "Sustainable choices align with your humanitarian values. Light finishes feel more futuristic than traditional dark woods. Consider alternatives to wood where innovation offers better solutions."
            },
            "fabrics": {
                "upholstery": "Technical performance fabrics, innovative textiles (recycled materials, temperature regulating)",
                "curtains": "Minimal or architectural (perhaps solar shades, smart glass instead)",
                "throws": "Sustainable wool, innovative recycled materials",
                "bedding": "Technical fabrics with temperature regulation, sustainable materials",
                "rugs": "Modern abstract patterns, sustainable materials, innovative construction",
                "texture_notes": "Innovation over tradition. Explore textiles made from recycled plastic, temperature-regulating fabrics, sustainable alternatives to conventional materials."
            },
            "wall_treatments": {
                "feature": "Architectural surfaces (metal panels, textured concrete), digital art displays",
                "texture": "Deliberate, architectural, possibly changeable",
                "paint_finish": "Matte or innovative finishes (magnetic, whiteboard paint for walls that function)",
                "notes": "Consider walls as functional surfaces—magnetic paint for rearrangeable displays, whiteboard surfaces for ideation. Art should provoke thought; consider digital frames for rotating collections."
            },
            "flooring": {
                "primary": "Polished concrete, sustainable engineered surfaces",
                "secondary": "Pale sustainable hardwood, innovative flooring solutions",
                "rugs": "Minimal, sustainable, modern"
            },
            "lighting": {
                "general": "Cool daylight (5000K+) for productivity, adjustable colour temperature",
                "task": "LED systems with excellent control",
                "accent": "LED strips for architectural effect, smart lighting with full programmability",
                "natural": "Maximised, possibly with smart glass that adjusts automatically",
                "notes": "Fully programmable lighting system allows you to create different atmospheres instantly. Consider circadian rhythm support. Colour-changing capability for different needs. Smart integration essential."
            }
        }
    },

    "Pisces": {
        "narrative": """The Fish embody mutable water—the boundaryless consciousness that flows between realms, perceives what cannot be seen, and accesses dimensions of reality invisible to more earth-bound souls. This is the energy of the mystic who knows beyond knowing, the artist who channels rather than creates, the healer who absorbs others' pain into their own body for transformation. Pisces understands that the material world is a thin membrane over infinite depth.

Your essential nature is permeable. Where others maintain clear boundaries between self and other, inner and outer, real and imagined, you experience fluid interchange. This is both gift and vulnerability: you access inspiration, intuition, and connection unavailable to more bounded souls, but you also absorb energy and emotion that isn't yours to carry.

The dream world may feel as real as waking life—perhaps more so. Your access to the unconscious, the collective, the symbolic gives you insight others lack but can make consensus reality feel thin, unsatisfying, even arbitrary. Art, music, nature, and spiritual practice are not hobbies but necessities that connect you to what feels most real.

The shadow of Pisces emerges as dissolution—when permeability becomes inability to maintain necessary selfhood, when sensitivity becomes escapism, when compassion enables rather than heals. Your spiritual work involves developing enough structure to channel your considerable gifts, and learning that boundaries can be spiritual too.""",

        "interior_blueprint": """Your home must be a sanctuary in the deepest sense—a protected space where your permeable nature can safely exist, where harsh reality softens into something bearable, where beauty and dream and spirit can flow freely. This is not merely a dwelling but a temple, a refuge, a space between worlds.

Softness is sanctuary. Everything that meets your body—visual field, air quality, sound environment, seating surfaces—should support rather than assault your sensitive system. You probably feel things others don't notice: electromagnetic fields, sound pollution, energetic residue. Design to minimise these assaults.

Water features are not decorative but essential. The sound of flowing water, the visual of aquarium or pool, the humidity of healthy plants—these connect you to your element and maintain your energetic balance. If nothing else, ensure a quality bathroom that functions as private spa.

Spiritual practice space deserves priority. Whether meditation, yoga, prayer, art, or other practice, you need a dedicated zone for communion with the infinite. This might be a separate room or a corner with clear boundaries—either way, it should be uncompromised by other functions.""",

        "colours": {
            "primary": ["Seafoam", "Lavender", "Silver Blue"],
            "secondary": ["Soft Grey", "Pale Green", "Misty Mauve"],
            "accent": ["Iridescent tones", "Pearl", "Amethyst purple"],
            "specifications": "Colours of ocean depth, of twilight, of dreams. Nothing harsh or demanding. Layer soft colours that shift with light. Iridescent surfaces that change colour—like fish scales, like mother of pearl—capture your shifting, flowing nature."
        },

        "materials": {
            "metals": {
                "primary": "Silver (lunar, reflective)",
                "secondary": "Platinum, White Gold",
                "accent": "Mother of Pearl inlay, Abalone",
                "finish_notes": "Reflective, lunar metals. Silver's connection to moon and water makes it your primary. Mother of pearl and abalone bring ocean energy—use in handles, frames, decorative elements."
            },
            "stones": {
                "primary": "Aquamarine (communication, clarity, water element)",
                "secondary": "Amethyst (spiritual protection and intuition)",
                "accent": "Moonstone, Fluorite, Larimar",
                "decorative": "Sea glass, Pearls, Coral (ethically sourced)",
                "application": "Aquamarine clears emotional debris—essential for your absorptive nature. Amethyst protects during spiritual practice. Sea glass carries ocean memory. Pearls form through patient layering—like your wisdom."
            },
            "woods": {
                "primary": "Driftwood (water-formed)",
                "secondary": "Reclaimed Woods with weathered finish",
                "accent": "Wicker, Rattan (water-adjacent)",
                "finish": "Weathered, whitewashed, silvery grey tones",
                "notes": "Water-touched wood resonates with your element. Driftwood's organic curves feel natural to you. Whitewashed finishes soften wood's earthiness toward your watery nature."
            },
            "fabrics": {
                "upholstery": "Silk, Velvet in ocean colours, Chenille",
                "curtains": "Layered sheers that diffuse light dreamlike, silk drapes that puddle gracefully",
                "throws": "Cashmere in lavender and silver, Silk throws, Faux fur in grey",
                "bedding": "Silk sheets or highest quality cotton, Multiple texture layers, Cloud-like comforters",
                "rugs": "Ultra-soft high pile, Sheepskin, Plush textures underfoot",
                "texture_notes": "Softness priority—nothing scratchy, nothing harsh. Fabrics that flow like water, that feel like comfort. Silk's luminous quality mirrors your shifting nature."
            },
            "wall_treatments": {
                "feature": "Watercolour-effect walls (limewash), Soft textured surfaces",
                "texture": "Gentle undulation, cloud-like effect",
                "paint_finish": "Matte or limewash (soft, dimensional)",
                "notes": "Walls should feel like atmosphere more than surface. Limewash techniques create soft, cloud-like depth. Avoid anything hard-edged or industrial."
            },
            "flooring": {
                "primary": "Pale weathered wood, whitewashed hardwood",
                "secondary": "Soft natural stone with underfloor heating",
                "rugs": "Maximum softness underfoot—layered, plush, protective"
            },
            "lighting": {
                "general": "Very warm (2400-2700K), diffused, never harsh",
                "task": "Soft glow rather than bright focus",
                "accent": "Salt lamps, Himalayan salt, Candles abundant, Fairy lights",
                "natural": "Filtered through sheers—you prefer soft, diffused light",
                "notes": "Lighting should feel like perpetual dawn or twilight—soft, liminal, transitional. Salt lamps purify air and emit soft glow. Candles for their meditative quality. Avoid overhead brightness."
            }
        }
    }
}


# ============================================================================
# CHINESE ZODIAC DATA
# ============================================================================

CHINESE_ZODIAC_DATA = {
    "Rat": {
        "narrative": """The Rat initiates the zodiac cycle—first to answer the Jade Emperor's summons, first in line, first in cleverness. This is the energy of the survivor who thrives through wit, the accumulator who ensures future security through present resourcefulness, the social navigator who understands the power of connection. Rat energy is quick, adaptable, ambitious, and perpetually alert to both danger and opportunity.

In Chinese metaphysics, the Rat carries Yang Water energy—surface flow that finds every crack, adapts to every container, and eventually reaches the sea through sheer persistence. You likely possess the Rat's gift for reading situations quickly, identifying opportunities others miss, and positioning yourself advantageously before others recognise the game has begun.

Your home should support this alertness while also providing genuine rest from constant vigilance. The challenge is creating space where your busy mind can quiet—where security is so assured that you can actually relax. This may require visible protection measures that satisfy your need to feel safe.

Resourcefulness expresses in your space through clever solutions, multi-functional furniture, hidden storage that maximises every inch. The Rat wastes nothing, including space. You may be drawn to homes that others overlook—seeing potential where others see problems."""
    },

    "Ox": {
        "narrative": """The Ox embodies patient strength—the power that moves mountains not through explosive force but through tireless, persistent effort. Second in the zodiac, arriving just after Rat (who rode on Ox's back, winning through cunning rather than effort), the Ox represents all who succeed through honest labour rather than clever tricks. This is the energy of the builder, the farmer, the artisan who creates lasting value through skill and patience.

In Chinese metaphysics, the Ox carries Yin Earth energy—the fertile soil that accepts seed and produces harvest through its own innate nature rather than striving. You likely possess the Ox's capacity for sustained effort, preference for steady progress over dramatic leaps, and deep reliability that makes you the foundation others build upon.

Your home should reflect this stability—substantial construction, quality materials, traditional forms that have proven themselves over time. The Ox has no interest in trends or experiments. You want what works, what lasts, what accumulates value through patient time.

Comfort matters more than impression. The Ox works hard and deserves rest. Your furniture should be solid enough to last generations, comfortable enough to reward daily use. Nothing flimsy, nothing that requires delicate treatment."""
    },

    "Tiger": {
        "narrative": """The Tiger prowls through the zodiac as Yang Wood incarnate—the power that grows upward and outward, that breaks through obstacles, that cannot be confined. Third in the sequence, the Tiger refused to compromise its dignity by racing strategically, arriving precisely when it arrived, magnificent and unconcerned with placement. This is the energy of the natural leader, the protective parent, the warrior who fights for what matters.

Your charisma fills whatever space you enter—this is not something you do but something you are. The Tiger's presence is felt before it's seen, announced by a shift in atmosphere, an intensification of energy. This creates both attraction and intimidation, often simultaneously.

Your home must accommodate this intense energy without constraining it. Open space, high ceilings, dramatic statements—the Tiger's lair should match the Tiger's presence. Claustrophobic spaces, cluttered rooms, and timid design choices will irritate you on a primal level.

Nature connection is essential. The Tiger belongs in the wild, and too much civilisation depletes your energy. Ensure abundant plants, outdoor access, natural materials, and ideally views of greenery. If urban living constrains this, compensate aggressively with indoor nature."""
    },

    "Rabbit": {
        "narrative": """The Rabbit embodies Yin Wood—the gentle growth that succeeds through grace rather than force, the life that finds a way through cracks rather than confrontation. Fourth in the zodiac, arriving through clever avoidance of the rushing river that slowed others, the Rabbit represents all who succeed through elegance, diplomacy, and the strategic application of charm.

Your refined nature expresses through aesthetic sensitivity that others often lack. You notice what's slightly off—the proportion that isn't quite right, the colour that clashes subtly, the texture that cheapens an otherwise quality piece. This perception is both gift and burden; you cannot unsee what you've seen.

Your home must achieve a level of refinement that might seem excessive to others but represents minimum acceptability to you. Everything should harmonise—colours, textures, proportions, objects. Visual discord will disturb you more than most people understand.

Peace is essential to your flourishing. You cannot tolerate conflict-heavy environments, loud disturbances, or chaotic energy for long without depleting. Design for sanctuary—sound absorption, visual calm, protected privacy. The burrow is your retreat from a world too harsh for your sensitivity."""
    },

    "Dragon": {
        "narrative": """The Dragon alone in the zodiac is mythical—the only animal that doesn't walk our earth, that belongs to realms beyond ordinary reality. Fifth in the sequence, the Dragon delayed arrival because it stopped to bring rain to a drought-stricken village—power placed in service of others. This is the energy of the extraordinary, the magnificent, the blessed.

In Chinese culture, Dragon energy is the most auspicious—associated with emperors, with success, with the special destiny that some seem born to fulfill. You may feel this specialness as both gift and burden: the sense that you're meant for something significant, combined with pressure to live up to such expectations.

Your home should reflect magnificence without becoming costume. Genuine quality, dramatic gestures, and exceptional pieces that announce extraordinary taste rather than ordinary affluence. The Dragon's lair should impress, but impress through authentic excellence rather than obvious display.

Scale matters. Small, cramped, or modest spaces will feel like cages to Dragon energy. You need room for your expansive nature—high ceilings, generous proportions, space to be your full magnificent self. If square footage is limited, create the illusion of scale through design choices."""
    },

    "Snake": {
        "narrative": """The Snake carries wisdom wrapped in mystery—the knowledge that power often works best when concealed, that observation precedes action, that stillness can be more potent than movement. Sixth in the zodiac, arriving by wrapping itself around Horse's hoof (then startling Horse at the finish), the Snake embodies strategic patience and the willingness to use unexpected methods.

Your mind works differently than most—deeper, more patient, more willing to wait for complete understanding before acting. You likely see patterns others miss, sense currents beneath surface events, and trust intuition over obvious logic. This gives you advantages but can also create isolation; others may find your perceptions unsettling.

Your home should support this contemplative nature while also providing warmth—Snake is cold-blooded and needs external heat sources for activation. Consider environmental temperature carefully. Ensure sunny spots for winter, comfortable warmth throughout.

Privacy is non-negotiable. The Snake reveals itself selectively, and your home should support this selective revelation. Spaces where you can observe without being observed, rooms that protect secrets, the ability to control completely what visitors see and access."""
    },

    "Horse": {
        "narrative": """The Horse embodies Yang Fire—the energy of the sun at peak, radiating heat and light, impossible to ignore or contain. Seventh in the zodiac, the Horse would have arrived first if Snake hadn't startled it at the finish line—a reminder that speed without awareness can betray. This is the energy of the adventurer, the freedom-seeker, the spirit that cannot be domesticated.

Your energy runs hot—literally and metaphorically. You likely process experience quickly, need movement to think, become restless when constrained, and wilt without adventure and change. The Horse cannot circle the same pasture indefinitely; it needs new territory to explore.

Your home should balance this need for movement with necessary grounding. Perhaps a base camp rather than a permanent settlement—a place you love returning to because it doesn't trap you. Design for easy departure and joyful return. Minimise objects that require constant tending.

Air and light are essential. Horse energy needs ventilation, both literal and metaphorical. Ensure excellent airflow, abundant natural light, the ability to open windows wide. Stuffy, dark spaces will feel like stalls to your freedom-loving nature."""
    },

    "Goat": {
        "narrative": """The Goat (also called Sheep or Ram) embodies Yin Earth's most receptive aspect—the soft ground that receives seed, the valley that gathers water, the pause between actions that allows integration. Eighth in the zodiac, arriving together with Monkey and Rooster on a raft they built cooperatively, the Goat represents those who succeed through collaboration rather than competition.

Your artistic sensibility likely exceeds your technical skill or practical drive—you perceive beauty, harmony, and emotional truth more readily than you implement systems or achieve measurable goals. This isn't weakness but specialisation; the world needs those who see beauty as much as those who build structures.

Your home should nurture this sensitive, creative nature. Beauty isn't optional for you but essential—visual discord actually causes discomfort. Surround yourself with what genuinely pleases your eye, even if it's humble. Authenticity matters more than expense.

Comfort supports your creativity. The Goat creates best when secure, nourished, and free from survival pressure. Design your home for comfort first—physical comfort that allows your mind to rest, aesthetic comfort that pleases without demanding attention."""
    },

    "Monkey": {
        "narrative": """The Monkey embodies Yang Metal's clever aspect—the sharp mind that cuts through problems, the adaptable intelligence that finds solutions others miss. Ninth in the zodiac, also arriving on the shared raft, the Monkey represents those who succeed through wit, curiosity, and the refusal to accept that any problem is unsolvable.

Your mind is your primary tool—quick, curious, capable of seeing angles invisible to more linear thinkers. You likely learn fast, bore easily, and generate more ideas than any single lifetime could implement. This mental fertility is both gift and challenge; focus requires effort your nature resists.

Your home should stimulate without overwhelming—providing the variety your quick mind craves while somehow also supporting sustained attention when needed. Consider zoning: areas for active mental engagement, separate areas for necessary rest and integration.

Playfulness belongs in your space. The Monkey doesn't take itself too seriously and neither should your home. Whimsical elements, unexpected objects, things that spark delight and curiosity—these are appropriate and supportive, not frivolous."""
    },

    "Rooster": {
        "narrative": """The Rooster embodies Yin Metal—the refined edge that cuts precisely, the polished surface that reflects truth, the voice that announces the new day and calls others to attention. Tenth in the zodiac, also arriving on the shared raft but taking credit for bringing the group across, the Rooster represents those who succeed through accuracy, presentation, and unflinching honesty.

Your attention to detail exceeds comfortable levels for most people. You notice imperfections, inconsistencies, and errors that others overlook—and you may struggle to let these go unmentioned. This precision serves important functions but can exhaust both yourself and others.

Your home should meet your exacting standards—because you will notice every failure to do so. Quality materials, precise execution, everything in its proper place. This isn't obsessive but practical; your eye cannot rest on imperfection without irritation.

Beauty for you is largely about correctness—proper proportion, appropriate quality, logical organisation. The Rooster aesthetic tends toward clean lines, ordered arrangements, and the satisfaction of everything being exactly right rather than approximately acceptable."""
    },

    "Dog": {
        "narrative": """The Dog embodies Yang Earth—the solid ground that can be relied upon, the protector that guards through the night, the friend whose loyalty never wavers regardless of circumstance. Eleventh in the zodiac, delayed because it stopped to play in the water, the Dog represents those who succeed through faithfulness, honest effort, and the trust they inspire in others.

Your moral compass likely runs stronger than most—you have clear sense of right and wrong, and struggle to participate in what violates your values regardless of consequences. This integrity can create difficulty in compromised environments but also attracts those who value authenticity.

Your home should feel secure—not just locked but genuinely safe. The Dog guards instinctively, and your home should support this protective nature while also allowing you to rest from vigilance. Consider security systems not as paranoia but as Dog-appropriate infrastructure.

Loyalty extends to your space—you may prefer staying put to constant upgrading, deepening relationship with your home rather than seeking greener pastures. The Dog's loyalty means you'll likely invest in making your current space work rather than constantly seeking something better."""
    },

    "Pig": {
        "narrative": """The Pig completes the zodiac cycle—last in sequence but not in value, carrying Yin Water energy that flows through all things, nourishes without demanding, and trusts in the abundance of the universe. Twelfth in the zodiac, delayed because it stopped to eat and then nap, the Pig represents those who succeed through genuineness, generosity, and the faith that there is always enough.

Your generous nature likely extends to others more readily than to yourself. You may give easily but struggle to receive, sacrifice your needs for others' comfort, and downplay your own desires. Learning to include yourself in your generosity is important developmental work.

Your home should be genuinely comfortable—sensual, abundant, generous to you as well as guests. The Pig appreciates good food, comfortable seating, pleasant sensations. Don't skimp on what makes daily life pleasurable; this isn't self-indulgence but self-respect.

Abundance rather than scarcity should guide your design. Full pantries, comfortable guest accommodations, plenty of everything that matters. The Pig's home welcomes; there's always room for one more, always enough to share."""
    }
}

CHINESE_ELEMENT_DATA = {
    "Metal": {
        "description": "Metal element brings precision, refinement, and the capacity for decisive action. Metal cuts through confusion, creates clear boundaries, and values quality over quantity. Metal years produce people with strong aesthetic sensibility, organizational capacity, and the ability to let go of what no longer serves.",
        "interior_influence": "Metal element expresses through clean lines, metallic surfaces, white and grey tones, precise organisation, and quality over quantity. Actual metals—especially silver, steel, and copper—strengthen this element. Round shapes balance metal's cutting quality."
    },
    "Water": {
        "description": "Water element brings wisdom, flexibility, and the capacity to flow around obstacles. Water finds the deepest path, connects disparate elements, and values insight over action. Water years produce people with intellectual depth, emotional intelligence, and the ability to wait for right timing.",
        "interior_influence": "Water element expresses through flowing forms, reflective surfaces, dark blues and blacks, and actual water features. Glass and mirrors carry water energy. Irregular, organic shapes support water's flowing nature."
    },
    "Wood": {
        "description": "Wood element brings growth, expansion, and the capacity for sustained development. Wood pushes upward through obstacles, spreads outward to claim space, and values progress over stability. Wood years produce people with vision, leadership capacity, and the ability to begin new ventures.",
        "interior_influence": "Wood element expresses through plants, wooden furniture, green colours, and vertical elements. Columnar shapes, tall bookcases, and upward lines strengthen wood. Living plants are essential—they literally are this element."
    },
    "Fire": {
        "description": "Fire element brings illumination, transformation, and the capacity for passionate engagement. Fire reveals what darkness hides, transforms what it touches, and values intensity over comfort. Fire years produce people with charisma, creative brilliance, and the ability to inspire others.",
        "interior_influence": "Fire element expresses through triangular shapes, red and orange colours, candles and fireplaces, and bright lighting. Pointed shapes, angular furniture, and statement lighting strengthen fire. Actual flame is most powerful."
    },
    "Earth": {
        "description": "Earth element brings stability, nourishment, and the capacity for supportive presence. Earth receives and transforms, maintains center while others move, and values reliability over excitement. Earth years produce people with practical wisdom, nurturing capacity, and the ability to build lasting foundations.",
        "interior_influence": "Earth element expresses through square shapes, yellow and brown tones, ceramics and pottery, and low, grounded furniture. Heavy pieces, thick rugs, and centering elements strengthen earth. Ceramics and crystals carry earth energy."
    }
}


# ============================================================================
# LIFE PATH DATA
# ============================================================================

LIFE_PATH_DATA = {
    1: {
        "title": "The Pioneer",
        "narrative": """Life Path 1 carries the energy of new beginnings—the spark that initiates, the will that pioneers, the self that dares to stand alone. You arrived in this life with a mission of individuation: learning to be fully yourself regardless of what others want you to be, developing the courage to lead rather than follow, and ultimately creating something new in the world.

Your soul chose this path because independence requires development. The 1 energy pushes toward autonomy, sometimes uncomfortably. You may have experienced situations that forced self-reliance—not as punishment but as curriculum. Every time you had to stand alone, you were developing capacities your soul came to master.

Leadership is your natural position but not always your comfortable one. The 1 often struggles with the isolation leadership requires, with the responsibility of being first, with the vulnerability of expressing original vision. Your work is to lead anyway—not from ego but from recognition that you're designed to go first.

The shadow of Life Path 1 involves ego distortion—either inflation that demands recognition or deflation that refuses to claim power. Your spiritual work involves developing healthy ego: strong enough to lead, humble enough to serve, clear enough to distinguish between authentic self-expression and mere self-aggrandisement.""",
        "interior_focus": "Create spaces that support independent action and personal power. Your home should feel like YOUR space—strongly imprinted with your identity. Include at least one area where you're clearly in charge, where your vision dominates."
    },

    2: {
        "title": "The Diplomat",
        "narrative": """Life Path 2 carries the energy of partnership—the awareness that perceives others, the sensitivity that reads emotional undercurrents, the desire that seeks harmony above individual triumph. You arrived in this life with a mission of relationship: learning to balance self with other, developing the capacity to cooperate without losing yourself, and ultimately serving as a bridge between people.

Your soul chose this path because partnership is not automatic—it must be learned. The 2 energy pushes toward connection but also forces confrontation with its difficulties: codependence, oversensitivity, loss of self in pleasing others. Your challenges around relationship are your curriculum, not your failures.

Sensitivity is both your gift and your challenge. You likely perceive what others miss—emotional undercurrents, unspoken needs, relational dynamics. This perception can inform wise action or can overwhelm you into paralysis. Learning to manage your sensitivity without numbing it is crucial developmental work.

The shadow of Life Path 2 involves boundary dissolution—losing yourself in relationship, adapting so completely to others that you forget your own shape. Your spiritual work involves developing healthy partnership: close enough to truly connect, distinct enough to remain yourself.""",
        "interior_focus": "Create spaces that support connection while also protecting your sensitive nature. Soft environments that don't assault your senses. Clear distinction between social spaces and private retreats. Design for partnership—seating arrangements that facilitate conversation."
    },

    3: {
        "title": "The Expresser",
        "narrative": """Life Path 3 carries the energy of creative expression—the joy that bubbles up, the words that must be spoken, the art that demands creation. You arrived in this life with a mission of expression: learning to give form to what moves through you, developing the courage to be seen in your creative truth, and ultimately bringing joy into the world through your unique voice.

Your soul chose this path because expression requires development. The 3 energy wants to create but must learn how—must develop craft alongside inspiration, must build confidence alongside talent. Your creative frustrations are curriculum, not curses. Every blocked expression is teaching you something about how creation actually works.

Joy is your natural state when aligned. The 3 connected to creative flow experiences life as inherently delightful—interesting, playful, full of possibility. But disconnected from this flow, the 3 can sink into depression that feels equally natural. Your work is maintaining the connection to your creative source.

The shadow of Life Path 3 involves scattered creativity—beginning everything, finishing nothing, dissipating energy across too many channels. Also: using charm to avoid depth, performing rather than genuinely expressing. Your spiritual work involves focused creativity and authentic voice.""",
        "interior_focus": "Create spaces that inspire and support creative work. Colour, visual interest, and inspiration boards are appropriate. Ensure dedicated space for whatever creative work calls you. Design for joy—your home should make you happy to be there."
    },

    4: {
        "title": "The Builder",
        "narrative": """Life Path 4 carries the energy of structure—the patience that builds brick by brick, the discipline that maintains systems, the reliability that others depend upon. You arrived in this life with a mission of building: learning to create lasting foundations, developing the patience for gradual progress, and ultimately leaving behind structures that outlast you.

Your soul chose this path because building is hard. The 4 energy confronts you with limitations—of time, resources, energy, and circumstance. These limitations are your curriculum. Every frustrating constraint is teaching you how to build within reality rather than fantasy.

Work is your natural domain. The 4 finds meaning through productive effort, through tangible accomplishment, through the satisfaction of seeing something real emerge from sustained labor. Work without meaning depletes you; meaningful work energizes you regardless of compensation.

The shadow of Life Path 4 involves rigidity—building structures that imprison rather than support, maintaining systems past their usefulness, resisting necessary change. Also: workaholism that substitutes productivity for relationship. Your spiritual work involves flexible structure—strong enough to last, adaptable enough to serve life.""",
        "interior_focus": "Create spaces that support productive work and long-term functionality. Quality construction matters enormously—you'll feel the difference between solid and flimsy. Build in systems for organisation. Your home should work as well as it looks."
    },

    5: {
        "title": "The Freedom-Seeker",
        "narrative": """Life Path 5 carries the energy of freedom—the restlessness that seeks new experience, the curiosity that must know through direct encounter, the spirit that refuses constraint. You arrived in this life with a mission of expansion: learning through diverse experience, developing the wisdom to use freedom well, and ultimately becoming a teacher of liberation.

Your soul chose this path because freedom must be earned through understanding. The 5 energy pushes toward expansion but also reveals its pitfalls—addiction, chaos, inability to commit. Your excesses teach as much as your restraints. Freedom for the 5 is found not by avoiding structure but by choosing it consciously.

Change is your constant. The 5 lives in a state of perpetual transition, which can be experienced as adventure or as rootlessness depending on perspective. Learning to find stability within change—to maintain core self while circumstances shift—is crucial developmental work.

The shadow of Life Path 5 involves escape—using freedom as avoidance rather than expansion, running from rather than toward. Also: addiction, sensation-seeking that substitutes intensity for meaning. Your spiritual work involves freedom in service of growth rather than flight.""",
        "interior_focus": "Create spaces that accommodate change while maintaining some constancy. Flexibility in furniture arrangements, minimal permanent fixtures, easy-to-update décor. Yet also: some anchoring elements that provide continuity across your changes."
    },

    6: {
        "title": "The Nurturer",
        "narrative": """Life Path 6 carries the energy of responsibility—the heart that takes on others' burdens, the eye that perceives what needs fixing, the self that naturally serves. You arrived in this life with a mission of love in action: learning to care without controlling, developing the wisdom to know when helping harms, and ultimately embodying the responsible heart that communities need.

Your soul chose this path because love requires skill. The 6 energy naturally gives but must learn how to give well—without enabling, without martyrdom, without expecting return. Your challenging relationships are curriculum, teaching the complexity of genuine care.

Home and family are your natural domain. The 6 often becomes the center of family systems—the one others depend upon, the one who maintains connections, the one who remembers needs. This centrality can be fulfilling or exhausting depending on how consciously you occupy it.

The shadow of Life Path 6 involves codependence—giving that expects return, caring that controls, sacrifice that carries hidden resentment. Also: martyrdom, perfectionism, difficulty receiving. Your spiritual work involves balanced responsibility—caring without carrying, helping without controlling.""",
        "interior_focus": "Create spaces that support caretaking while also nurturing you. A kitchen that welcomes cooking for others. Guest accommodations that don't deplete you. Also: private spaces that are YOURS, where caretaking pauses and self-care begins."
    },

    7: {
        "title": "The Seeker",
        "narrative": """Life Path 7 carries the energy of inquiry—the mind that questions beneath surface answers, the soul that seeks direct knowing, the heart that can never accept received wisdom in place of genuine understanding. You arrived in this life with a mission of truth: learning to ask the questions that matter, developing the solitude that deep inquiry requires, and ultimately sharing the insights you discover.

Your soul chose this path because truth requires pursuit. The 7 energy cannot rest in comfortable assumptions—something always asks "but what's really going on?" This restless questioning can lead to wisdom or to isolation depending on how it's channeled.

Solitude is essential, not optional. The 7 needs time alone to process, to go deep, to escape the noise of social reality and enter the quiet where insight lives. Relationships that don't understand this need will eventually become intolerable.

The shadow of Life Path 7 involves withdrawal—using intellectual superiority as defense, substituting thinking for living, getting lost in theory. Also: isolation that becomes depression, skepticism that closes rather than opens. Your spiritual work involves embodied wisdom—truth that includes rather than escapes life.""",
        "interior_focus": "Create spaces that support deep thinking and necessary solitude. A study or contemplative space is essential. Quality quiet—consider sound absorption. Also: beauty that feeds the soul, since 7s can become too purely mental without aesthetic nourishment."
    },

    8: {
        "title": "The Powerhouse",
        "narrative": """Life Path 8 carries the energy of mastery—the ambition that builds empires, the pragmatism that understands material reality, the soul that came to learn power's lessons. You arrived in this life with a mission of manifestation: learning to create abundance, developing the wisdom to use power ethically, and ultimately demonstrating that spiritual and material can unite.

Your soul chose this path because power teaches through difficulty. The 8 often experiences extremes—of wealth and loss, success and failure, power and powerlessness. These cycles are curriculum, teaching that true power lies not in circumstance but in how you meet it.

Material world mastery is your arena. The 8 understands that the physical world is not an obstacle to spiritual development but a classroom for it. Money, business, influence—these are your textbooks, teaching lessons in manifestation, value, and the nature of exchange.

The shadow of Life Path 8 involves power distortion—either grasping that corrupts or avoidance that wastes capability. Also: workaholism, confusing net worth with self worth, believing you are what you accomplish. Your spiritual work involves empowered service—using material success for good beyond self.""",
        "interior_focus": "Create spaces that support abundance consciousness and professional success. Quality that communicates success to yourself and others. A home office or workspace worthy of significant accomplishment. Avoid both ostentation and false modesty."
    },

    9: {
        "title": "The Humanitarian",
        "narrative": """Life Path 9 carries the energy of completion—the wisdom that has traveled through all previous numbers, the heart that extends beyond personal to universal, the soul that came to complete and transcend. You arrived in this life with a mission of synthesis: integrating what you've learned across many lifetimes, developing the generosity that gives without expecting, and ultimately serving the whole.

Your soul chose this path because completion requires release. The 9 energy must learn to let go—of possessions, of relationships, of identities, of anything held too tightly. Your losses are curriculum, teaching that nothing is owned, only borrowed and passed on.

Universal perspective is your natural lens. The 9 often struggles with narrow focus, with personal concerns, with the smallness of individual life compared to the vastness they perceive. Learning to care for particulars while seeing universals is crucial developmental work.

The shadow of Life Path 9 involves spiritual bypassing—using higher truth to avoid human experience, floating above rather than engaging with life. Also: difficulty receiving, giving that depletes, incomplete grieving. Your spiritual work involves embodied transcendence—big picture wisdom that doesn't forget the small.""",
        "interior_focus": "Create spaces that reflect accumulated wisdom and universal consciousness. Art and objects from various cultures and traditions. A sense of collected rather than designed. Also: letting go infrastructure—clear pathways for releasing what's complete."
    },

    11: {
        "title": "The Spiritual Messenger",
        "narrative": """Life Path 11 is the first Master Number—carrying ordinary 2 energy intensified to extraordinary voltage. You arrived with the capacity to channel insight, inspiration, and illumination that comes from beyond ordinary consciousness. This is the path of the visionary, the medium, the person whose nervous system can translate higher frequencies into earthly understanding.

The burden is significant. 11 energy is literally more than ordinary systems are designed to carry. You may experience this as nervous sensitivity, as overwhelming intuition, as difficulty functioning in ordinary reality. Managing your energy is not a weakness but a primary spiritual practice.

You are a bridge—between visible and invisible, conscious and unconscious, ordinary and transcendent. What flows through you is meant to reach others. Your work is keeping the channel clear, managing the voltage so it doesn't burn out the instrument, and finding forms that allow transmission.

The shadow of 11 involves either inflation (believing yourself special) or deflation (collapsing under the weight). Also: living at 2 because 11 is too much—a legitimate choice but a wasted gift. Your spiritual work involves sustainable mastery—learning to carry the light without burning out.""",
        "interior_focus": "Create spaces that support spiritual practice and sensitive systems. Protection from environmental assault (EMF, sound, harsh energy). Meditation space is essential. Also: grounding elements to balance the high-frequency nature."
    },

    22: {
        "title": "The Master Builder",
        "narrative": """Life Path 22 is the Master Builder—carrying ordinary 4 energy amplified to world-changing magnitude. You arrived with the capacity to create structures that serve generations, to manifest visions so vast that ordinary lifetimes seem insufficient. This is the path of the architect of the future, the one who builds the institutions, systems, and physical forms that shape collective reality.

The challenge is scale. 22 energy perceives possibilities that require decades to implement, collaborations that span continents, structures that must outlast their builders. Learning to work at this scale while remaining grounded in daily reality is your core developmental task.

You are a translator—between vision and form, idea and implementation, individual dream and collective manifestation. What you see others might dismiss as fantasy; your work is showing them how it becomes real through systematic effort.

The shadow of 22 involves either grandiosity (schemes too vast for reality) or collapse (living at 4 because 22 is too much). Also: frustration when others can't see what you see, impatience with the pace of manifestation. Your spiritual work involves patient power—maintaining vision while accepting timeline.""",
        "interior_focus": "Create spaces that support major creative projects and long-term vision. Room for plans, models, representations of what you're building. Also: grounding elements and rest spaces—you need recovery time from the intensity of your vision."
    },

    33: {
        "title": "The Master Teacher",
        "narrative": """Life Path 33 is the Master Teacher—carrying ordinary 6 energy amplified to universal service. You arrived with the capacity to hold space for others' evolution, to transmit understanding that transforms, to embody such complete love that simply being near you catalyzes growth. This is the path of the avatar, the one whose life becomes the teaching.

The demand is total. 33 energy asks for everything—for your complete dedication to love's service, for your willingness to become vessel rather than self, for surrender that most humans avoid. This path is not compatible with ordinary self-interest; attempting to live 33 for personal gain will bring suffering.

You are an embodiment—of possibility, of what humans can become, of love made manifest in daily action. Your teaching happens less through words than through presence, less through instruction than through example. You teach by being.

The shadow of 33 involves martyr syndrome (sacrifice that enables rather than transforms) or retreat (living at 6 because 33 is too demanding). Also: messiah complex, believing yourself indispensable. Your spiritual work involves egoless service—giving everything while holding nothing, including self-importance.""",
        "interior_focus": "Create spaces that support teaching, healing, and service without depleting you. Space for receiving students or clients. Also: strong boundaries around private quarters—you need protection from the constant demand for your energy."
    }
}


# ============================================================================
# SOUL URGE DATA
# ============================================================================

SOUL_URGE_DATA = {
    1: {
        "title": "The Urge to Originate",
        "narrative": """Your soul craves originality. At the deepest level, you need to create something new—to bring into existence what wouldn't exist without you. This isn't ego (though it can become that) but rather the soul's recognition of its unique contribution. When you're not creating originally, something feels fundamentally wrong regardless of external success.

This urge expresses through leadership, innovation, and the courage to go first. You may not always show this publicly—Soul Urge is often hidden from casual observers—but at home, in privacy, the need for autonomous action and original expression will dominate.

Your interior space should feel like yours alone—strongly personal, distinctly individual, not following trends or others' opinions. What matters is whether YOU respond to it, not whether it meets external standards."""
    },

    2: {
        "title": "The Urge to Connect",
        "narrative": """Your soul craves connection. At the deepest level, you need to be in relationship—to experience the completion that comes only from truly meeting another consciousness. This isn't codependence (though it can become that) but rather the soul's recognition that reality is relational. Isolation feels like starvation regardless of how much you have.

This urge expresses through partnership, diplomacy, and the drive to create harmony. You may achieve much in the world, but your truest satisfaction comes through intimacy—through the experience of truly knowing and being known.

Your interior space should support relationship—seating arrangements that facilitate conversation, environments that others find welcoming, the sense of space awaiting partnership."""
    },

    3: {
        "title": "The Urge to Express",
        "narrative": """Your soul craves expression. At the deepest level, you need to give form to what moves through you—to communicate, create, and share what lives in your interior world. This isn't exhibitionism (though it can become that) but rather the soul's recognition of its unique voice. Silence feels like suffocation regardless of external success.

This urge expresses through art, communication, and all forms of creative expression. Whatever your profession, the soul demands opportunities to create, to share, to be witnessed in your expression.

Your interior space should inspire creativity and support self-expression. Colour, art materials, inspiration boards, beautiful objects—the environment should speak, should stimulate, should make expression easier."""
    },

    4: {
        "title": "The Urge to Build",
        "narrative": """Your soul craves structure. At the deepest level, you need to create order from chaos—to build systems that work, to establish foundations that last, to leave behind something solid. This isn't rigidity (though it can become that) but rather the soul's recognition of form's value. Chaos feels like existential threat regardless of external excitement.

This urge expresses through organisation, construction, and the patient accumulation of lasting value. Your satisfaction comes not from quick wins but from seeing gradual progress toward permanent results.

Your interior space should embody the order you crave—everything functioning properly, logical organisation, quality construction that will last. Your home should work as well as it looks."""
    },

    5: {
        "title": "The Urge for Freedom",
        "narrative": """Your soul craves freedom. At the deepest level, you need variety, experience, and the liberty to explore without constraint. This isn't irresponsibility (though it can become that) but rather the soul's recognition that growth requires movement. Routine feels like imprisonment regardless of external security.

This urge expresses through adventure, sensory experience, and resistance to limitation. Whatever your external life, the soul demands change, expansion, and the ability to follow curiosity where it leads.

Your interior space should support freedom rather than constraint—flexible arrangements, easy-to-change elements, minimal clutter that ties you down. Your home should facilitate departure as easily as it welcomes return."""
    },

    6: {
        "title": "The Urge to Nurture",
        "narrative": """Your soul craves meaningful responsibility. At the deepest level, you need to care for others, to beautify what surrounds you, to be of genuine service. This isn't martyrdom (though it can become that) but rather the soul's recognition of love's active nature. Being useless feels like being worthless regardless of external achievement.

This urge expresses through caretaking, beautification, and the creation of harmonious environments. Your satisfaction comes from knowing that your efforts tangibly help, that beauty exists because you created it.

Your interior space should embody the beauty and care you value—aesthetically pleasing, functional for nurturing others, a place where caretaking can be expressed. Also: spaces that nurture YOU, not just those you serve."""
    },

    7: {
        "title": "The Urge to Understand",
        "narrative": """Your soul craves truth. At the deepest level, you need to understand—to penetrate beneath surfaces, to grasp essential reality, to know rather than merely believe. This isn't mere intellectualism (though it can become that) but rather the soul's recognition that understanding is its food. Superficiality feels like starvation regardless of social belonging.

This urge expresses through inquiry, solitude, and the pursuit of deeper knowledge. Whatever your external life, the soul demands time for contemplation and the freedom to question.

Your interior space should support deep thinking—quiet environments, dedicated study space, beauty that feeds the soul without demanding attention. Books, likely many books."""
    },

    8: {
        "title": "The Urge for Achievement",
        "narrative": """Your soul craves manifestation. At the deepest level, you need to achieve—to produce tangible results, to exercise power effectively, to see your efforts materialise in the world. This isn't mere greed (though it can become that) but rather the soul's recognition that manifestation is its arena. Powerlessness feels like death regardless of spiritual achievement.

This urge expresses through ambition, material success, and the effective exercise of influence. Your satisfaction comes from seeing real results—measurable, visible, undeniable.

Your interior space should reflect achieved success—quality that communicates accomplishment, environments that support productivity, the comfortable elegance that well-used prosperity provides."""
    },

    9: {
        "title": "The Urge to Serve",
        "narrative": """Your soul craves contribution. At the deepest level, you need to give—to benefit the whole, to leave the world better than you found it, to serve purposes larger than yourself. This isn't people-pleasing (though it can become that) but rather the soul's recognition of its role in the larger pattern. Selfishness feels like betrayal regardless of personal success.

This urge expresses through generosity, humanitarian concern, and the desire to share wisdom. Your satisfaction comes from witnessing the good your efforts create, especially for those you'll never meet.

Your interior space should reflect universal values—art from various cultures, space for serving others, beauty that comes from collected meaning rather than calculated design."""
    },

    11: {
        "title": "The Urge to Illuminate",
        "narrative": """Your soul craves illumination—both receiving and transmitting. At the deepest level, you need to channel insight from beyond ordinary consciousness and share it with those who can receive it. This isn't spiritual superiority (though it can become that) but rather the soul's recognition of its function as bridge between worlds.

This urge expresses through intuition, spiritual teaching, and the capacity to inspire others through transmitted understanding. Your satisfaction comes from moments of genuine illumination—your own and others'.

Your interior space should support spiritual practice and the sensitive nervous system you carry. Meditation space, protection from harsh energy, the quiet that deeper reception requires."""
    },

    22: {
        "title": "The Urge to Master Material Reality",
        "narrative": """Your soul craves materialising the ideal. At the deepest level, you need to bring vision into form at scale—to create structures that serve humanity, to build what will outlast you. This isn't megalomania (though it can become that) but rather the soul's recognition of its capacity for world-changing contribution.

This urge expresses through large-scale projects, systematic implementation, and the patience for multi-decade efforts. Your satisfaction comes from seeing tangible progress toward lasting transformation.

Your interior space should support major vision work—room for plans and models, the stability that long-term focus requires, quality that reflects the seriousness of your purpose."""
    },

    33: {
        "title": "The Urge to Teach Through Love",
        "narrative": """Your soul craves love's highest expression. At the deepest level, you need to embody love so completely that your presence itself becomes teaching—to serve as living demonstration of human possibility. This isn't messiah complex (though it can become that) but rather the soul's recognition of its capacity for transformative presence.

This urge expresses through healing presence, teaching, and the selfless service that transforms without forcing. Your satisfaction comes from witnessing others' awakening, knowing your presence contributed.

Your interior space should support teaching and healing work while also providing necessary sanctuary. Space for receiving others, space for restoring yourself—both are essential."""
    }
}


# ============================================================================
# LO SHU SECTOR DATA
# ============================================================================

LO_SHU_DATA = {
    1: {
        "sector": "Career & Life Path",
        "position": "North - Bottom Center",
        "element": "Water",
        "present_meaning": "With 1 present in your Lo Shu, you carry natural communication ability and emotional intelligence. You likely have intuitive sense for career direction and can navigate your life path with reasonable confidence. Relationships start relatively easily for you.",
        "missing_meaning": "Missing 1 indicates potential communication blockages and possible career confusion. You may struggle to articulate your needs in relationships or feel uncertain about your life direction. This doesn't doom you but requires conscious development.",
        "cure_placement": "North sector of your home—often the back center area. Also: the entry (first impression) and any water-element areas.",
        "cure_objects": ["Water feature (fountain, aquarium)", "Mirrors (water element)", "Glass objects", "Black or dark blue décor", "Wavy, irregular shapes", "Career imagery"],
        "spiritual_why": "The 1 sector represents how life force enters your experience—the mouth of chi. Strengthening this area supports both material career and spiritual purpose alignment."
    },

    2: {
        "sector": "Relationships & Receptivity",
        "position": "Southwest - Lower Right",
        "element": "Earth",
        "present_meaning": "With 2 present in your Lo Shu, partnership comes relatively naturally. You can receive—love, help, resources—without excessive discomfort. Your feminine/receptive energy is available for balanced relationship.",
        "missing_meaning": "Missing 2 indicates challenges with receiving and partnership. You may give but struggle to receive, or attract relationships that mirror this imbalance. The work is developing receptivity—learning to accept as gracefully as you offer.",
        "cure_placement": "Southwest sector of home—often the back right corner. Also: master bedroom (relationship space) and any areas dedicated to partnership.",
        "cure_objects": ["Pairs of objects (two candles, two crystals)", "Rose Quartz", "Pink and yellow/earth tones", "Square shapes", "Romantic imagery", "Ceramic or clay items"],
        "spiritual_why": "The 2 sector represents your capacity to receive the universe's gifts. Strengthening this area develops your receptive channel—essential for balanced manifestation."
    },

    3: {
        "sector": "Family & Health",
        "position": "East - Left Center",
        "element": "Wood",
        "present_meaning": "With 3 present in your Lo Shu, you have natural access to vital energy and family harmony. Health comes relatively easily when you don't actively undermine it. Family relationships have baseline functionality.",
        "missing_meaning": "Missing 3 indicates potential health vulnerabilities and family complications. You may need to work harder to maintain vitality or process family patterns that others inherit more easily. Conscious health practices become especially important.",
        "cure_placement": "East sector of home—often the left side when facing in from the entrance. Also: family gathering spaces and health-related areas.",
        "cure_objects": ["Healthy plants (especially tall, upward-growing)", "Green colours", "Wooden furniture and objects", "Columnar shapes", "Family photographs in wooden frames", "Health imagery"],
        "spiritual_why": "The 3 sector represents the ancestral energy flowing into your life. Strengthening this area heals family lineage and supports the physical vitality that comes from connected roots."
    },

    4: {
        "sector": "Wealth & Blessings",
        "position": "Southeast - Lower Left",
        "element": "Wood",
        "present_meaning": "With 4 present in your Lo Shu, prosperity has natural pathways into your life. You likely receive blessings—material and otherwise—without extraordinary effort. Gratitude comes easily.",
        "missing_meaning": "Missing 4 indicates blocks in your prosperity channel. Wealth may require more effort than others expend, or you may struggle to recognise and receive blessings already present. The work is opening blocked prosperity consciousness.",
        "cure_placement": "Southeast sector of home—often the back left corner. Also: any areas associated with finances (home office, filing areas).",
        "cure_objects": ["Flowing water (fountain moving toward house center)", "Healthy plants (especially lucky bamboo)", "Purple and green colours", "Wood element", "Abundance imagery", "Symbols of desired prosperity"],
        "spiritual_why": "The 4 sector represents your capacity to receive universal abundance. Strengthening this area clears prosperity blocks and aligns you with the universe's inherent generosity."
    },

    5: {
        "sector": "Center & Health",
        "position": "Center",
        "element": "Earth",
        "present_meaning": "With 5 present in your Lo Shu, you have natural grounding and can maintain center when others lose balance. Your core stability allows you to weather life's changes with resilience.",
        "missing_meaning": "Missing 5 indicates potential instability and difficulty maintaining center. You may feel ungrounded, subject to extremes, or lacking a core stable identity. The work is developing internal foundation that doesn't depend on external circumstance.",
        "cure_placement": "Literal center of your home. Also: any transitional spaces where energy moves between zones.",
        "cure_objects": ["Crystals (especially clear quartz or amethyst)", "Yellow and earth tones", "Square shapes", "Heavy, grounding furniture", "Ceramic or clay", "Central gathering space"],
        "spiritual_why": "The 5 represents the center from which all directions flow—the still point around which the wheel turns. Strengthening this area develops the internal stability that remains constant through external change."
    },

    6: {
        "sector": "Helpful People & Travel",
        "position": "Northwest - Upper Right",
        "element": "Metal",
        "present_meaning": "With 6 present in your Lo Shu, helpful people appear when needed. Mentors, benefactors, and timely assistance arrive without excessive seeking. Travel tends to go smoothly and bring benefits.",
        "missing_meaning": "Missing 6 indicates potential isolation—feeling you must do everything yourself, help not arriving when needed. You may also experience travel complications or difficulty receiving guidance. The work is opening to assistance.",
        "cure_placement": "Northwest sector of home—often the front right area. Also: entry (where helpers enter) and travel-related storage.",
        "cure_objects": ["Metal objects (bells, metal bowls)", "White and grey colours", "Round shapes", "Images of mentors or helpers", "Travel imagery", "Spiritual or religious figures you respect"],
        "spiritual_why": "The 6 sector represents heaven's support for your earthly journey. Strengthening this area activates the network of seen and unseen assistance that everyone has available but not everyone receives."
    },

    7: {
        "sector": "Children & Creativity",
        "position": "West - Right Center",
        "element": "Metal",
        "present_meaning": "With 7 present in your Lo Shu, creativity flows naturally and relationships with children (yours or others) have baseline ease. Joy is accessible. Projects move from conception to completion.",
        "missing_meaning": "Missing 7 indicates potential creative blocks and challenges in the children sector of life. Completing projects may require more effort. Joy may need conscious cultivation. The work is opening creative channels and developing play.",
        "cure_placement": "West sector of home—often the right side when facing in from entrance. Also: creative spaces, children's rooms, and play areas.",
        "cure_objects": ["Metal wind chimes", "White and metallic colours", "Round shapes", "Creative art", "Whimsical objects", "Children's artwork or photographs"],
        "spiritual_why": "The 7 sector represents the creative impulse that brings new things into being—whether children, art, or ideas. Strengthening this area opens the channel through which you birth your unique contributions."
    },

    8: {
        "sector": "Knowledge & Self-Cultivation",
        "position": "Northeast - Upper Left",
        "element": "Earth",
        "present_meaning": "With 8 present in your Lo Shu, learning comes naturally and inner development has momentum. You likely accumulate wisdom through experience without excessive struggle. Self-improvement efforts bear fruit.",
        "missing_meaning": "Missing 8 indicates potential learning blocks or difficulty with self-development. Knowledge may be harder to acquire or integrate. Inner growth may feel stagnant. The work is creating conditions for wisdom to accumulate.",
        "cure_placement": "Northeast sector of home—often the front left area. Also: study areas, meditation spaces, anywhere dedicated to learning.",
        "cure_objects": ["Books and educational materials", "Blue and green colours", "Mountain imagery", "Earth tones", "Images of wise teachers", "Study-supporting furniture"],
        "spiritual_why": "The 8 sector represents the mountain of accumulated wisdom. Strengthening this area supports both formal education and the deeper learning that comes through conscious experience."
    },

    9: {
        "sector": "Fame & Reputation",
        "position": "South - Top Center",
        "element": "Fire",
        "present_meaning": "With 9 present in your Lo Shu, recognition comes naturally when deserved. Your reputation tends to accurately reflect your true contributions. You can shine without excessive effort.",
        "missing_meaning": "Missing 9 indicates potential recognition blocks—being overlooked despite contributions, or reputation not matching reality. You may need to work harder to be seen or to ensure your contributions are properly attributed. The work is developing healthy visibility.",
        "cure_placement": "South sector of home—often the front center area. Also: living room (social visibility) and any areas associated with public reputation.",
        "cure_objects": ["Lighting (especially red or warm)", "Candles and fire imagery", "Red and purple colours", "Triangular shapes", "Awards or recognition symbols", "Personal achievement display"],
        "spiritual_why": "The 9 sector represents how your light reaches the world—the illumination that allows others to see your contribution. Strengthening this area aligns recognition with genuine worth and supports your visibility in service of purpose."
    }
}


# ============================================================================
# PERSONAL YEAR DATA
# ============================================================================

PERSONAL_YEAR_DATA = {
    1: {
        "title": "Year of New Beginnings",
        "narrative": """Personal Year 1 initiates a new nine-year cycle. Seeds planted now will determine much of what you harvest over the coming decade. This is the year to begin—new projects, new directions, new ways of being. The energy supports starting more than completing; initiation more than maintenance.

The focus is you. This isn't selfishness but cycle-appropriate self-attention. What do YOU want? What seeds will YOU plant? After years of responding to others and circumstances, the 1 year returns you to your own agency, your own vision, your own starting power.

Interior work this year should establish new foundations. This is an excellent time to move, to renovate, to fundamentally restructure your space. Whatever you create now sets the template for nine years. Don't just refresh—reconsider from first principles what your home should be."""
    },

    2: {
        "title": "Year of Partnership",
        "narrative": """Personal Year 2 brings relationship to the forefront. Seeds planted in your 1 year now need tending through cooperation. This is the year when you cannot go it alone—when progress requires partnership, patience, and the willingness to wait for others' timing.

The pace slows. Where the 1 year supported bold action, the 2 year asks for patience, diplomacy, and attention to others' needs. This can feel frustrating if you expect last year's momentum to continue. Trust the rhythm; partnership work is not lesser work.

Interior work this year should focus on relationship spaces. The bedroom deserves attention—it's the heart of partnership energy. Consider how your space supports or undermines connection. Create environments that welcome intimacy."""
    },

    3: {
        "title": "Year of Expression",
        "narrative": """Personal Year 3 brings creative expansion after the patience of the 2 year. Now the seeds begin sprouting in visible ways. Expression, joy, and creative output are all supported. This is the year to share—your art, your voice, your presence.

Social energy peaks. The 3 year often brings increased social activity, creative opportunities, and the desire to be seen. Where the 2 year asked for quiet partnership, the 3 year invites joyful expression in community.

Interior work this year should focus on creative space and joyful environments. Bring in colour, inspiration, and everything that makes your heart sing. Create space for whatever creative expression calls you. Design for joy."""
    },

    4: {
        "title": "Year of Foundation",
        "narrative": """Personal Year 4 brings the work phase. The creative expansion of the 3 year now needs structure, discipline, and practical implementation. This is the year of hard work—of building the foundations that will support future growth.

Reality demands attention. The 4 year confronts you with practical necessities—finances, health, organization, structure. Avoiding this work creates problems that compound. Engaging it builds the foundation for lasting success.

Interior work this year should focus on functionality and organization. This is the year for serious decluttering, organizing systems, and repairs you've postponed. Ensure everything works. Build the infrastructure your life requires."""
    },

    5: {
        "title": "Year of Change",
        "narrative": """Personal Year 5 brings the freedom you've earned through the 4 year's discipline. Change accelerates—expected or not. The midpoint of the nine-year cycle shakes loose what's ready to release and introduces new elements that will characterize the cycle's second half.

Expansion is the theme. The 5 year often brings travel, new experiences, and changes in circumstance. Routine becomes intolerable; variety becomes essential. This isn't instability but necessary movement.

Interior work this year should focus on flexibility. This may not be the time for permanent changes but rather for experimental ones—new arrangements, temporary updates, explorations of possibility. Let your space change with you."""
    },

    6: {
        "title": "Year of Responsibility — The Sacred Home Mission",
        "narrative": """Personal Year 6 in 2026 brings home and family to absolute center stage. This is not merely a year when domestic concerns matter—it is THE year when your relationship with home determines much else. The 6 is the number of the nurturer, the beautifier, the one who creates sanctuary. In 2026, this becomes your assignment.

The weight of responsibility may feel heavy. The 6 year often brings increased demands from family, home, or community. People need you more. Standards rise. The difference between acceptable and beautiful becomes a spiritual concern rather than a mere preference.

This is your year to transform your living space into genuine sanctuary. Not future plans, not eventual improvements—now. The 6 year supports renovation, decoration, and all forms of home beautification. What you create this year becomes the foundation for family life in years to come.

**The 2026 Personal Year 6 Interior Mission:**

This year asks you to become the conscious creator of your environment. Every choice matters—not because you're being judged but because you're finally ready to live in a space that fully supports your flourishing.

Begin with intention: What should your home feel like? Not look like—feel like. What emotional truth should it embody? Safety? Joy? Creativity? Abundance? Name it clearly; this becomes your design compass.

Move through each room asking: Does this serve the vision? Keep what serves, release what doesn't, transform what could. This is spiritual work dressed as interior design.

Pay special attention to:
- Family gathering spaces: Where connection happens needs to support connection
- Kitchen: The hearth of home, the place of nourishment. Make it worthy.
- Bedroom: Sanctuary within sanctuary. Beauty and peace above all.
- Entry: First impression, daily transition. It should welcome you home.

The 6 year grants extra capacity for aesthetic judgment. Trust your eye this year—it sees more clearly than usual. What you create now will serve for years."""
    },

    7: {
        "title": "Year of Inner Reflection",
        "narrative": """Personal Year 7 brings introversion after the external focus of the 6 year. The domestic work is largely complete; now inner work begins. This is the year of analysis, reflection, solitude, and spiritual deepening.

Withdrawal is appropriate. The 7 year often brings desire for solitude that may seem antisocial but is actually necessary. This is your integration year—processing all you've built, learned, and experienced. Others may not understand your retreat.

Interior work this year should focus on contemplative space. Create environments that support reflection, study, and inner work. Your meditation corner, reading nook, or private retreat space deserves special attention. Simplify rather than add."""
    },

    8: {
        "title": "Year of Manifestation",
        "narrative": """Personal Year 8 brings harvest time. The inner work of the 7 year now expresses as outer manifestation. This is the year when effort converts to results, when power peaks, when the material world reflects your accumulated development.

Achievement is supported. The 8 year often brings career advancement, financial improvement, and recognition. What you've built through the cycle now produces visible returns. This isn't luck but cumulative result.

Interior work this year should reflect achievement. Quality upgrades are appropriate—not vanity but accurate reflection of your actual development. If your space looks like you haven't progressed, it misrepresents reality. Let your home reflect your earned success."""
    },

    9: {
        "title": "Year of Completion",
        "narrative": """Personal Year 9 completes the cycle. What began nine years ago now reaches resolution—whether through triumphant completion or necessary release. This is the year for endings, for letting go of what cannot continue, for creating space for the next cycle to begin.

Release is the primary work. The 9 year asks what has served its purpose and what must now be released. Relationships, possessions, identities, ways of being—all are evaluated for whether they continue into the next cycle.

Interior work this year should focus on clearing and completion. Deep decluttering serves both practically and spiritually. Release objects connected to completed phases. Create empty space that awaits the new. Let your space demonstrate readiness for what's coming."""
    }
}


# ============================================================================
# REST TYPOLOGY DATA
# ============================================================================

REST_TYPOLOGY_DATA = {
    "Cave": {
        "description": """You restore through containment—through environments that hold, shelter, and protect from external stimulation. The Cave-dweller needs enclosure: low ceilings, soft walls, dim light, muffled sound. Where others might feel claustrophobic, you feel held. Your nervous system interprets openness as exposure, space as vulnerability.

Cave rest is womb-return—the instinct to recreate conditions of pre-birth safety. This isn't regression but recognition that your particular system requires certain conditions for genuine restoration. You've likely discovered this already: you sleep better in enclosed spaces, you feel calmer in corners, you prefer restaurants with booths over open tables.""",

        "environment_specs": """**Ceiling Treatment:**
Consider canopy beds, draped fabric, or architectural elements that lower perceived ceiling height. Even dark-painted ceilings can create containment sensation.

**Wall Treatment:**
Fabric-covered walls, heavy textured wallpaper, or upholstered panels that absorb sound and create soft enclosure. Avoid hard, reflective surfaces.

**Lighting:**
Layered low lighting—table lamps with opaque shades, candles, salt lamps. Avoid overhead lights entirely in rest spaces. Consider smart bulbs set to never exceed 40% brightness.

**Sound:**
Sound absorption is critical. Carpet or heavy rugs, fabric walls, filled bookshelves all absorb sound. Consider acoustic panels disguised as art for problem areas.

**Furniture:**
High-backed chairs that create enclosure, corner seating, reading nooks with three-sided containment. Your ideal furniture hugs you.

**Bedroom Priority:**
Four-poster bed with full curtains (even if rarely closed), heavy bedding, blackout conditions achievable. This room should feel like a protective burrow.""",

        "practices": """**Cave Practices:**
- Create micro-caves: A specific chair with a specific blanket becomes a reliable restoration space
- Use weighted blankets—the pressure simulates being held
- Try an eye pillow or sleep mask even when awake—the facial pressure calms
- In hotels, immediately build your cave: move furniture if needed, drape extra blankets over lamps, create your enclosure
- Learn to communicate your need: "I need some Cave time" becomes relationship shorthand
- Consider a dedicated Cave space if square footage allows—a small room or closet transformed into pure restoration space""",

        "warnings": """**Cave Shadows:**
The Cave instinct can become avoidance. Watch for:
- Using Cave as escape from necessary life rather than restoration for engagement
- Depression masked as need for enclosure
- Isolation justified as restoration
- Cave time expanding to squeeze out all other life

Balance indicator: After Cave time, do you emerge ready to engage? If you emerge wanting more Cave, something other than restoration may be happening."""
    },

    "Valley": {
        "description": """You restore through expansion—through environments that offer space, vista, and room to breathe. The Valley-dweller needs openness: high ceilings, long views, abundant light, the sense that nothing confines. Where others might feel exposed, you feel released. Your nervous system interprets enclosure as confinement, small spaces as pressure.

Valley rest is liberation—the instinct to expand beyond boundaries, to remember you are not your constraints. This isn't avoidance but recognition that your particular system requires certain conditions for genuine restoration. You've likely discovered this already: you feel better near windows, you gravitate toward corners of large rooms, you prefer outdoor dining.""",

        "environment_specs": """**Ceiling Treatment:**
Height matters—if structural ceilings are low, paint them white to visually lift, remove anything that drops the perception. Skylights are valuable if available.

**Wall Treatment:**
Windows are walls for you—as many and as large as possible. Where windows aren't possible, mirrors that extend perceived space. Light colours that recede.

**Lighting:**
Abundant natural light is essential. Where not possible, full-spectrum daylight bulbs at high brightness. Your space should feel daytime even when it isn't (except for sleep).

**Sound:**
Open soundscapes—nature sounds, ambient noise that suggests space. Silence can feel enclosed; gentle background expansion can help.

**Furniture:**
Low furniture that doesn't block sightlines. Open floor plans with minimal visual barriers. Your furniture should seem to float in space rather than fill it.

**Bedroom Priority:**
If possible, high ceilings and large windows with controllable covering for sleep. The challenge is balancing openness (daytime restoration) with the darkness needed for sleep. Consider bedrooms that transform dramatically from day to night.""",

        "practices": """**Valley Practices:**
- Get outside daily—even brief exposure to actual sky restores what no interior can
- Position your primary workspace near the largest window
- When entering a space, orient toward the longest view
- In hotels, request high floors, largest windows, corner rooms with multiple aspects
- Learn to communicate your need: "I need some Valley time" becomes relationship shorthand
- If stuck in enclosed spaces, use techniques to create psychological space: close your eyes and visualize open landscapes, listen to recordings of open environments""",

        "warnings": """**Valley Shadows:**
The Valley instinct can become rootlessness. Watch for:
- Unable to commit because commitment feels like enclosure
- Relationship avoidance justified as need for space
- Never settling anywhere—always seeking the next vista
- Valley time as escape from intimacy

Balance indicator: Can you close the space when intimacy requires it? If openness is compulsive rather than restorative, the shadow may be active."""
    }
}


# ============================================================================
# SOUL EVOLUTION DATA
# ============================================================================

SOUL_EVOLUTION_DATA = {
    "Old Soul": {
        "description": """Old Souls have lived many lives and carry the wisdom—and weariness—of accumulated experience. You may have felt "different" from early childhood, not quite fitting standard development patterns. Things that excite younger souls may bore you; concerns others consider paramount may seem trivial.

The Old Soul's challenge is engagement. Having seen much, you can tend toward detachment, passivity, or the sense that nothing much matters. Your work is bringing your accumulated wisdom into active service while remaining genuinely present to this particular life.

Your interior environment should support both the rest old souls require and the engagement your development demands. Avoid creating museum-like spaces that reflect the past; create living spaces that honour experience while remaining vital.""",

        "interior_implications": """Old Souls often gravitate toward antiques, vintage items, and objects with history—you sense the accumulated energy in well-used objects. This instinct serves you but shouldn't become museum curation. Balance historical objects with living elements: plants, growing collections, spaces that evolve.

Simplicity often appeals—you're tired of stuff. Don't fight this instinct; let your space be sparser than contemporary norms suggest. What remains should be meaningful.

Rest spaces deserve priority. Old souls need more restoration than younger ones. Build in genuine retreat capacity."""
    },

    "Intermediate Soul": {
        "description": """Intermediate Souls are mid-journey—past the urgency of early learning but not yet carrying the accumulated weight of many lifetimes. You likely balance engagement and detachment reasonably well, able to care without being overwhelmed, able to release without being cold.

The Intermediate Soul's challenge is depth. You can navigate life's surfaces competently, but the call now is to go deeper—to develop mastery rather than mere competence. Your work is moving from "can handle" to "has mastered" in key life domains.

Your interior environment should support both competent functionality and the deeper engagement you're developing. Avoid comfortable adequacy that doesn't challenge growth; create spaces that invite mastery.""",

        "interior_implications": """Intermediate Souls often have practical, functional spaces that work well without being exceptional. Your developmental edge may be precisely here—moving from "good enough" to genuinely excellent.

Consider where you're settling. Your space is likely acceptable, but is it actually serving your highest potential? This might be your growth edge: creating environments that support mastery rather than mere adequacy.

Challenge yourself to develop genuine expertise in some aspect of interior creation. Deep knowledge of one area (rugs, lighting, a particular period) serves better than shallow familiarity with everything."""
    },

    "Young Soul": {
        "description": """Young Souls are early in the journey—vital, ambitious, and still learning basic lessons about how this reality works. You likely experience life intensely, care passionately about outcomes, and haven't yet developed the perspective that comes from many cycles.

The Young Soul's challenge is perspective. You may take things very seriously—status, success, getting it right—because you haven't yet learned that these concerns are somewhat arbitrary. Your work is achieving genuine mastery in the material world while beginning to glimpse its ultimate relativity.

Your interior environment should support both your achievement orientation and the perspective you're developing. Achievement markers have meaning for you and shouldn't be scorned; display your successes. But also include elements that point beyond merely material success.""",

        "interior_implications": """Young Souls often create achievement-focused spaces—displaying success markers, investing in visible status, creating impressive environments. This isn't shallow; it's developmentally appropriate. Don't fight your nature.

But also plant seeds of future growth. Include art that makes you think, books that challenge assumptions, one corner that serves contemplation rather than impression. You're not required to be beyond your development, but you can create spaces that invite development.

Quality matters to you—invest in it without apology. But consider letting some quality be invisible (high-grade mattress, air filtration) rather than all quality being display-oriented."""
    }
}


# ============================================================================
# TEMPERAMENTAL ARCHETYPE DATA
# ============================================================================

TEMPERAMENT_DATA = {
    "Sharp Sensitive": {
        "combination": "Fire + Water",
        "description": """You carry the unlikely combination of fire's intensity and water's sensitivity—passion that cuts deep, intuition with fierce edge. This creates an intense experience of life: you feel everything strongly AND perceive everything acutely. The sharpness wants action; the sensitivity needs processing time. Managing this internal dialectic is your core work.

Interior implications: Your space must balance stimulation and sanctuary. You need environments that can be exciting without overwhelming, that offer intensity when desired but retreat when needed. This usually means creating distinct zones—areas for engagement and areas for recovery.""",

        "environmental_needs": """Strong colour is appropriate but needs escape valves—rooms where intensity gives way to calm. Water features can help bridge your elements. Avoid either extreme: neither relentlessly stimulating nor entirely tranquil. Your space should range between peaks and valleys."""
    },

    "Grounded Flame": {
        "combination": "Fire + Earth",
        "description": """You carry fire's passion with earth's stability—ambition that follows through, creativity that produces concrete results. This is actually one of the more balanced combinations: the fire provides drive while the earth provides staying power. Your challenge is not balance but avoiding becoming too controlled, too reliable, too predictable.

Interior implications: Your space can handle bold choices because your nature will ground them. Where others might be overwhelmed by strong design decisions, you can sustain them. Trust your taste for the dramatic; your earth element will prevent chaos.""",

        "environmental_needs": """You can handle more intensity than most—richer colours, bolder furniture, stronger statements. Your earth grounds what might overwhelm others. Don't play it safe; your nature thrives with some fire in the environment. But also build in organic elements and natural materials that honour your earth."""
    },

    "Airy Waters": {
        "combination": "Air + Water",
        "description": """You carry air's intellect with water's emotion—thoughts suffused with feeling, feelings that can be articulated. This creates rich inner life but can also create flooding: too much to process, too many inputs, overwhelm from the combination of perceiving AND analyzing everything.

Interior implications: Your space needs to manage stimulation levels carefully. Air craves input; water absorbs it; together they can overload. Create environments with adjustable stimulation—spaces that can be enlivened or calmed according to your current capacity.""",

        "environmental_needs": """Prioritise flexibility—lighting that adjusts, curtains that can soften or reveal, the ability to increase or decrease sensory input. Your optimal level varies; design for variability. Water features where they don't interfere with air's need for clarity. Books and objects that satisfy air's curiosity without overwhelming water's absorption."""
    },

    "Metal Mind": {
        "combination": "Air + Metal",
        "description": """You carry air's intellect with metal's precision—thoughts with cutting edge, analysis that refines. This creates a powerful mental apparatus: you think clearly and can communicate precisely. The challenge is coldness—the potential for the mind's blade to cut rather than connect.

Interior implications: Your space tends toward the precise and clean—you notice imperfection and it bothers you. This aesthetic serves you but shouldn't become sterile. Build in warmth intentionally, knowing your nature will always pull toward the clean.""",

        "environmental_needs": """Allow your preference for order and precision—fighting it creates more tension than it solves. But consciously add warmth: warm metal tones (brass, copper), warm wood, textiles that soften. Your space should be precise without being cold, clean without being clinical. Organic shapes and natural materials balance metal's rigidity."""
    },

    "Earth Water": {
        "combination": "Earth + Water",
        "description": """You carry earth's stability with water's depth—groundedness that includes emotional range, practicality that doesn't exclude intuition. This is a naturally supportive combination: water softens earth's potential rigidity; earth contains water's potential flooding.

Interior implications: Your space wants to be both solid and soft—substantial without being hard, flowing without being unstable. This balance is actually easier for you than for many; trust your instincts.""",

        "environmental_needs": """Ground your space with substantial furniture, solid surfaces, and natural materials. Then soften with textiles, water features, and flowing forms. Your balance between these elements comes naturally—you'll feel when something is too hard or too soft. Trust that feeling; it's reliable."""
    },

    "Fire Air": {
        "combination": "Fire + Air",
        "description": """You carry fire's drive with air's velocity—passion that spreads quickly, enthusiasm that can ignite. This is high-energy combination: active, communicative, never still. The challenge is burnout—the fire can consume all the oxygen if not managed.

Interior implications: Your space must support high energy without contributing to burnout. You need environments that can handle your intensity but also invite recovery. The temptation is to create equally high-energy spaces; resist by ensuring restoration areas.""",

        "environmental_needs": """Your active areas can be stimulating—you can handle it. But build in mandatory calm: a bedroom that actively invites stillness, a reading corner that encourages pause. Without these, your environment feeds burnout rather than preventing it. Consider cooler colours in rest areas to counterbalance fire's heat."""
    }
}


# ============================================================================
# MAIN APPLICATION
# ============================================================================

def generate_shopping_list(zodiac_data, life_path, personal_year):
    """Generate comprehensive shopping list from blueprint data"""

    materials = zodiac_data.get("materials", {})

    shopping_categories = {
        "Metals & Hardware": [],
        "Stones & Crystals": [],
        "Woods & Furniture": [],
        "Fabrics & Textiles": [],
        "Wall Treatments": [],
        "Flooring": [],
        "Lighting": []
    }

    # Extract metals
    if "metals" in materials:
        metals = materials["metals"]
        shopping_categories["Metals & Hardware"].extend([
            f"Primary metal: {metals.get('primary', 'N/A')}",
            f"Secondary metal: {metals.get('secondary', 'N/A')}",
            f"Accent metal: {metals.get('accent', 'N/A')}"
        ])

    # Extract stones
    if "stones" in materials:
        stones = materials["stones"]
        shopping_categories["Stones & Crystals"].extend([
            f"Primary stone: {stones.get('primary', 'N/A')}",
            f"Secondary stone: {stones.get('secondary', 'N/A')}",
            f"Accent stones: {stones.get('accent', 'N/A')}",
            f"Decorative: {stones.get('decorative', 'N/A')}"
        ])

    # Extract woods
    if "woods" in materials:
        woods = materials["woods"]
        shopping_categories["Woods & Furniture"].extend([
            f"Primary wood: {woods.get('primary', 'N/A')}",
            f"Secondary wood: {woods.get('secondary', 'N/A')}",
            f"Finish: {woods.get('finish', 'N/A')}"
        ])

    # Extract fabrics
    if "fabrics" in materials:
        fabrics = materials["fabrics"]
        shopping_categories["Fabrics & Textiles"].extend([
            f"Upholstery: {fabrics.get('upholstery', 'N/A')}",
            f"Curtains: {fabrics.get('curtains', 'N/A')}",
            f"Throws: {fabrics.get('throws', 'N/A')}",
            f"Bedding: {fabrics.get('bedding', 'N/A')}",
            f"Rugs: {fabrics.get('rugs', 'N/A')}"
        ])

    # Extract wall treatments
    if "wall_treatments" in materials:
        walls = materials["wall_treatments"]
        shopping_categories["Wall Treatments"].extend([
            f"Feature walls: {walls.get('feature', 'N/A')}",
            f"Texture: {walls.get('texture', 'N/A')}",
            f"Paint finish: {walls.get('paint_finish', 'N/A')}"
        ])

    # Extract flooring
    if "flooring" in materials:
        floors = materials["flooring"]
        shopping_categories["Flooring"].extend([
            f"Primary flooring: {floors.get('primary', 'N/A')}",
            f"Secondary flooring: {floors.get('secondary', 'N/A')}"
        ])

    # Extract lighting
    if "lighting" in materials:
        lights = materials["lighting"]
        shopping_categories["Lighting"].extend([
            f"General lighting: {lights.get('general', 'N/A')}",
            f"Task lighting: {lights.get('task', 'N/A')}",
            f"Accent lighting: {lights.get('accent', 'N/A')}"
        ])

    return shopping_categories


def main():
    st.set_page_config(
        page_title="BLUEPRINT: The Sacred Interior",
        page_icon="◇",
        layout="wide",
        initial_sidebar_state="expanded"
    )

    apply_luxury_styling()

    # Header
    st.markdown("""
    <div style="text-align: center; padding: 2rem 0;">
        <p style="font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; letter-spacing: 0.3em; 
                  color: #D4AF8F; text-transform: uppercase; margin-bottom: 0.5rem;">
            A Numerological & Astrological Interior Design System
        </p>
    </div>
    """, unsafe_allow_html=True)

    st.title("BLUEPRINT")

    st.markdown("---")

    # Sidebar for input
    with st.sidebar:
        st.markdown("""
        <h2 style="font-family: 'Cormorant Garamond', serif; color: #C9A961; 
                   letter-spacing: 0.1em; font-size: 1.3rem;">
            ◇ Enter Your Details
        </h2>
        """, unsafe_allow_html=True)

        full_name = st.text_input(
            "Full Birth Name",
            value="Alexandra Morgan",
            help="Enter your complete name as it appears on your birth certificate"
        )

        birth_date = st.date_input(
            "Birth Date",
            value=date(1990, 7, 15),
            min_value=date(1900, 1, 1),
            max_value=date.today(),
            help="Select your date of birth"
        )

        generate_btn = st.button("Generate Blueprint", use_container_width=True)

        st.markdown("---")

        st.markdown("""
        <p style="font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: #9a8f88; 
                  text-align: center; font-style: italic;">
            Your personal blueprint reveals the sacred geometry of your ideal living space
        </p>
        """, unsafe_allow_html=True)

    if generate_btn or full_name:
        # Calculate all values
        western_sign = get_western_zodiac(birth_date)
        chinese_animal, chinese_element = get_chinese_zodiac(birth_date.year)
        life_path = calculate_life_path(birth_date)
        soul_urge = calculate_soul_urge(full_name)
        lo_shu_grid, lo_shu_present, lo_shu_missing = calculate_lo_shu_grid(birth_date)
        personal_year = calculate_personal_year(birth_date, 2026)

        # Get data
        western_data = WESTERN_ZODIAC_DATA.get(western_sign, {})
        chinese_data = CHINESE_ZODIAC_DATA.get(chinese_animal, {})
        chinese_element_data = CHINESE_ELEMENT_DATA.get(chinese_element, {})
        life_path_data = LIFE_PATH_DATA.get(life_path, {})
        soul_urge_data = SOUL_URGE_DATA.get(soul_urge, {})
        personal_year_data = PERSONAL_YEAR_DATA.get(personal_year, {})

        # Summary Header
        st.markdown(f"""
        <div class="blueprint-card">
            <h2 style="text-align: center; border-left: none; padding-left: 0;">
                Blueprint for {full_name}
            </h2>
            <p style="text-align: center; font-size: 1.1rem; color: #D4AF8F;">
                Born {birth_date.strftime('%B %d, %Y')}
            </p>
            <div style="display: flex; justify-content: center; gap: 3rem; margin-top: 1.5rem; flex-wrap: wrap;">
                <div style="text-align: center;">
                    <p style="color: #D4AF8F; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Western</p>
                    <p style="font-size: 1.3rem; color: #D4AF8F;">{western_sign}</p>
                </div>
                <div style="text-align: center;">
                    <p style="color: #D4AF8F; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Chinese</p>
                    <p style="font-size: 1.3rem; color: #D4AF8F;">{chinese_element} {chinese_animal}</p>
                </div>
                <div style="text-align: center;">
                    <p style="color: #D4AF8F; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Life Path</p>
                    <p style="font-size: 1.3rem; color: #D4AF8F;">{life_path}</p>
                </div>
                <div style="text-align: center;">
                    <p style="color: #D4AF8F; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Soul Urge</p>
                    <p style="font-size: 1.3rem; color: #D4AF8F;">{soul_urge}</p>
                </div>
                <div style="text-align: center;">
                    <p style="color: #D4AF8F; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">2026 Year</p>
                    <p style="font-size: 1.3rem; color: #D4AF8F;">{personal_year}</p>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)

        # Western Zodiac Section
        st.markdown("## ☉ Western Zodiac Foundation")

        with st.expander(f"**{western_sign} — Essential Nature**", expanded=True):
            st.markdown(western_data.get("narrative", ""))

        with st.expander(f"**{western_sign} — Interior Blueprint**", expanded=True):
            st.markdown(western_data.get("interior_blueprint", ""))

        # Material Specifications
        st.markdown("### Material Specifications")

        materials = western_data.get("materials", {})
        colours = western_data.get("colours", {})

        col1, col2 = st.columns(2)

        with col1:
            primary_swatches = colour_swatches_html(colours.get('primary', []))
            secondary_swatches = colour_swatches_html(colours.get('secondary', []))
            accent_swatches = colour_swatches_html(colours.get('accent', []))
            st.markdown(f"""
            <div class="material-spec">
                <p class="material-category">Colour Palette</p>
                <p style="font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:#9a8f88;margin-bottom:2px;">Primary</p>
                {primary_swatches}
                <p style="font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:#9a8f88;margin-bottom:2px;margin-top:0.6rem;">Secondary</p>
                {secondary_swatches}
                <p style="font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:#9a8f88;margin-bottom:2px;margin-top:0.6rem;">Accent</p>
                {accent_swatches}
                <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{colours.get('specifications', '')}</p>
            </div>
            """, unsafe_allow_html=True)

            if "metals" in materials:
                metals = materials["metals"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Metals</p>
                    <p><strong>Primary:</strong> {metals.get('primary', 'N/A')}</p>
                    <p><strong>Secondary:</strong> {metals.get('secondary', 'N/A')}</p>
                    <p><strong>Accent:</strong> {metals.get('accent', 'N/A')}</p>
                    <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{metals.get('finish_notes', '')}</p>
                </div>
                """, unsafe_allow_html=True)

            if "stones" in materials:
                stones = materials["stones"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Stones & Crystals</p>
                    <p><strong>Primary:</strong> {stones.get('primary', 'N/A')}</p>
                    <p><strong>Secondary:</strong> {stones.get('secondary', 'N/A')}</p>
                    <p><strong>Accent:</strong> {stones.get('accent', 'N/A')}</p>
                    <p><strong>Decorative:</strong> {stones.get('decorative', 'N/A')}</p>
                    <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{stones.get('application', '')}</p>
                </div>
                """, unsafe_allow_html=True)

        with col2:
            if "woods" in materials:
                woods = materials["woods"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Woods</p>
                    <p><strong>Primary:</strong> {woods.get('primary', 'N/A')}</p>
                    <p><strong>Secondary:</strong> {woods.get('secondary', 'N/A')}</p>
                    <p><strong>Accent:</strong> {woods.get('accent', 'N/A')}</p>
                    <p><strong>Finish:</strong> {woods.get('finish', 'N/A')}</p>
                    <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{woods.get('notes', '')}</p>
                </div>
                """, unsafe_allow_html=True)

            if "fabrics" in materials:
                fabrics = materials["fabrics"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Fabrics & Textiles</p>
                    <p><strong>Upholstery:</strong> {fabrics.get('upholstery', 'N/A')}</p>
                    <p><strong>Curtains:</strong> {fabrics.get('curtains', 'N/A')}</p>
                    <p><strong>Throws:</strong> {fabrics.get('throws', 'N/A')}</p>
                    <p><strong>Bedding:</strong> {fabrics.get('bedding', 'N/A')}</p>
                    <p><strong>Rugs:</strong> {fabrics.get('rugs', 'N/A')}</p>
                    <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{fabrics.get('texture_notes', '')}</p>
                </div>
                """, unsafe_allow_html=True)

        # Wall, Floor, Lighting
        col3, col4, col5 = st.columns(3)

        with col3:
            if "wall_treatments" in materials:
                walls = materials["wall_treatments"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Wall Treatments</p>
                    <p><strong>Feature:</strong> {walls.get('feature', 'N/A')}</p>
                    <p><strong>Texture:</strong> {walls.get('texture', 'N/A')}</p>
                    <p><strong>Paint Finish:</strong> {walls.get('paint_finish', 'N/A')}</p>
                    <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{walls.get('notes', '')}</p>
                </div>
                """, unsafe_allow_html=True)

        with col4:
            if "flooring" in materials:
                floors = materials["flooring"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Flooring</p>
                    <p><strong>Primary:</strong> {floors.get('primary', 'N/A')}</p>
                    <p><strong>Secondary:</strong> {floors.get('secondary', 'N/A')}</p>
                    <p><strong>Rugs:</strong> {floors.get('rugs', 'N/A')}</p>
                </div>
                """, unsafe_allow_html=True)

        with col5:
            if "lighting" in materials:
                lights = materials["lighting"]
                st.markdown(f"""
                <div class="material-spec">
                    <p class="material-category">Lighting</p>
                    <p><strong>General:</strong> {lights.get('general', 'N/A')}</p>
                    <p><strong>Task:</strong> {lights.get('task', 'N/A')}</p>
                    <p><strong>Accent:</strong> {lights.get('accent', 'N/A')}</p>
                    <p><strong>Natural:</strong> {lights.get('natural', 'N/A')}</p>
                    <p style="font-size: 0.9rem; margin-top: 1rem; color: #C9A961;">{lights.get('notes', '')}</p>
                </div>
                """, unsafe_allow_html=True)

        st.markdown("---")

        # Chinese Zodiac Section
        st.markdown("## ☯ Chinese Zodiac Influence")

        with st.expander(f"**{chinese_element} {chinese_animal}**", expanded=True):
            st.markdown(chinese_data.get("narrative", ""))
            st.markdown("---")
            st.markdown(f"**{chinese_element} Element Influence:**")
            st.markdown(chinese_element_data.get("description", ""))
            st.markdown(chinese_element_data.get("interior_influence", ""))

        st.markdown("---")

        # Life Path Section
        st.markdown("## ⬡ Life Path Number")

        with st.expander(f"**Life Path {life_path}: {life_path_data.get('title', '')}**", expanded=True):
            st.markdown(life_path_data.get("narrative", ""))
            st.markdown("---")
            st.markdown(f"**Interior Focus:** {life_path_data.get('interior_focus', '')}")

        # Soul Urge Section
        st.markdown("## ♡ Soul Urge Number")

        with st.expander(f"**Soul Urge {soul_urge}: {soul_urge_data.get('title', '')}**", expanded=True):
            st.markdown(soul_urge_data.get("narrative", ""))

        st.markdown("---")

        # Lo Shu Grid Section
        st.markdown("## ⊞ Lo Shu Grid Analysis")

        col_lo1, col_lo2 = st.columns(2)

        with col_lo1:
            st.markdown("### Present Numbers")
            st.markdown(f"**Your Grid Contains:** {', '.join(map(str, lo_shu_present)) if lo_shu_present else 'None'}")

            for num in lo_shu_present:
                if num in LO_SHU_DATA:
                    data = LO_SHU_DATA[num]
                    with st.expander(f"**{num} — {data['sector']}** ✓"):
                        st.markdown(f"*Position:* {data['position']} | *Element:* {data['element']}")
                        st.markdown(data['present_meaning'])

        with col_lo2:
            st.markdown("### Missing Numbers")
            st.markdown(f"**Absent from Grid:** {', '.join(map(str, lo_shu_missing)) if lo_shu_missing else 'None (Complete Grid)'}")

            for num in lo_shu_missing:
                if num in LO_SHU_DATA:
                    data = LO_SHU_DATA[num]
                    with st.expander(f"**{num} — {data['sector']}** (Missing)"):
                        st.markdown(f"*Position:* {data['position']} | *Element:* {data['element']}")
                        st.markdown(data['missing_meaning'])
                        st.markdown("---")
                        st.markdown(f"**Cure Placement:** {data['cure_placement']}")
                        st.markdown(f"**Cure Objects:** {', '.join(data['cure_objects'])}")
                        st.markdown(f"**Spiritual Purpose:** {data['spiritual_why']}")

        st.markdown("---")

        # Personal Year Section
        st.markdown("## ◎ Personal Year 2026")

        with st.expander(f"**Personal Year {personal_year}: {personal_year_data.get('title', '')}**", expanded=True):
            st.markdown(personal_year_data.get("narrative", ""))

        st.markdown("---")

        # Rest Typology
        st.markdown("## ◐ Rest Typology")

        tab1, tab2 = st.tabs(["Cave Type", "Valley Type"])

        with tab1:
            cave_data = REST_TYPOLOGY_DATA["Cave"]
            st.markdown(cave_data["description"])
            with st.expander("**Environment Specifications**"):
                st.markdown(cave_data["environment_specs"])
            with st.expander("**Practices**"):
                st.markdown(cave_data["practices"])
            with st.expander("**Warnings**"):
                st.markdown(cave_data["warnings"])

        with tab2:
            valley_data = REST_TYPOLOGY_DATA["Valley"]
            st.markdown(valley_data["description"])
            with st.expander("**Environment Specifications**"):
                st.markdown(valley_data["environment_specs"])
            with st.expander("**Practices**"):
                st.markdown(valley_data["practices"])
            with st.expander("**Warnings**"):
                st.markdown(valley_data["warnings"])

        st.markdown("---")

        # Shopping List
        st.markdown("## ✧ Your Material Shopping List")

        shopping_list = generate_shopping_list(western_data, life_path, personal_year)

        st.markdown("""
        <div class="shopping-list">
            <h3>Essential Materials for Your Sacred Space</h3>
        </div>
        """, unsafe_allow_html=True)

        cols = st.columns(3)

        categories = list(shopping_list.keys())
        for i, category in enumerate(categories):
            with cols[i % 3]:
                st.markdown(f"""
                <div class="material-spec" style="min-height: 200px;">
                    <p class="material-category">{category}</p>
                </div>
                """, unsafe_allow_html=True)
                for item in shopping_list[category]:
                    if "N/A" not in item:
                        st.markdown(f"• {item}")

        # Missing Lo Shu Cures
        if lo_shu_missing:
            st.markdown("### Lo Shu Cures Needed")
            cure_cols = st.columns(3)
            for i, num in enumerate(lo_shu_missing):
                    data = LO_SHU_DATA[num]
                    with cure_cols[i % 3]:
                        st.markdown(f"""
                        <div class="material-spec">
                            <p class="material-category">Sector {num}: {data['sector']}</p>
                            <p style="font-size: 0.85rem;"><strong>Placement:</strong> {data['cure_placement']}</p>
                        </div>
                        """, unsafe_allow_html=True)
                        for cure in data['cure_objects']:
                            st.markdown(f"• {cure}")

        st.markdown("---")

        # Footer
        st.markdown("""
        <div style="text-align: center; padding: 3rem 0; color: #9a8f88;">
            <p style="font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-style: italic; letter-spacing: 0.05em;">
                "Your space is a mirror of your soul. Design it with intention."
            </p>
            <p style="font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; margin-top: 1rem;">
                BLUEPRINT: The Sacred Interior ◇ Est. 2024
            </p>
        </div>
        """, unsafe_allow_html=True)


if __name__ == "__main__":
    main()
