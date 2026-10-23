"""Rebuild portfolio figures from the published confirmatory summary. No model calls.

Requires matplotlib and Pillow. The source JSON records the report URL and run.
"""
from pathlib import Path
from io import BytesIO
import json
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'src/data/agent-behavior-results.json').read_text())
DEST = ROOT / 'src/assets/projects/agent-behavior-lab'
DEST.mkdir(parents=True, exist_ok=True)
PAPER, INK, MUTED, LINE = '#f7f7f2', '#242a35', '#62676d', '#dcdfd7'
SAGE, VIOLET, TAUPE = '#819579', '#7567a0', '#adb5ad'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'text.color': INK, 'axes.labelcolor': MUTED, 'xtick.color': INK, 'ytick.color': MUTED, 'font.size': 12})
n = data['items']
pair = data['paired']
assert sum(pair.values()) == n
assert pair['bothCorrect'] + pair['correctToWrong'] == data['conditions'][1]['correct']
assert pair['bothCorrect'] + pair['wrongToCorrect'] == data['conditions'][2]['correct']


def base(title, subtitle):
    fig = plt.figure(figsize=(12, 7.5), facecolor=PAPER, dpi=180)
    fig.text(.07, .94, 'AGENT BEHAVIOR LAB  /  STUDY 001', fontsize=10, color=MUTED, weight='bold')
    fig.text(.07, .865, title, fontsize=27, fontfamily='DejaVu Serif')
    fig.text(.07, .81, subtitle, fontsize=12, color=MUTED)
    return fig


def footer(fig):
    fig.text(.07, .095, '48 unique held-out items · One model · Simulated peer cues', fontsize=10, color=MUTED)
    fig.text(.07, .06, f"Run: {data['runDate']}  |  Model: {data['model']}  |  Source: published confirmatory report", fontsize=8.5, color=MUTED)
    fig.text(.07, .027, 'Scope: this task family and prompt format; no claim of human-like conformity or generalization across models.', fontsize=8.5, color=MUTED)


def save(fig, name, card=False):
    buffer = BytesIO()
    fig.savefig(buffer, format='png', dpi=180, facecolor=PAPER)
    im = Image.open(buffer).convert('RGB')
    im.save(DEST / f'{name}.webp', lossless=True, method=6)
    if card:
        im.thumbnail((960, 960), Image.Resampling.LANCZOS)
        im.save(DEST / f'{name}-card.webp', quality=95, method=6)
    plt.close(fig)


fig = base('Same wrong answer. Different attribution.', 'Confirmatory accuracy across three matched prompt conditions')
ax = fig.add_axes([.09, .265, .82, .45], facecolor=PAPER)
values = [item['correct'] / n * 100 for item in data['conditions']]
ax.bar(range(3), values, width=.55, color=[TAUPE, SAGE, VIOLET], zorder=3)
ax.set_ylim(0, 100)
ax.set_yticks([0, 25, 50, 75, 100], ['0%', '25%', '50%', '75%', '100%'])
ax.set_ylabel('Correct answers', fontsize=11, labelpad=15)
ax.set_xticks(range(3), ['Baseline\nNo added answer cue', 'Repetition control\nWrong answer repeated', 'Named peers\nSame wrong answer, attributed'])
ax.tick_params(axis='both', length=0, pad=10)
ax.grid(axis='y', color=LINE, zorder=0)
for spine in ax.spines.values():
    spine.set_visible(False)
for i, (value, item) in enumerate(zip(values, data['conditions'])):
    ax.text(i, value + 3, f"{value:.1f}%", ha='center', fontsize=20, weight='bold')
    ax.text(i, value / 2, f"{item['correct']}/{n}", ha='center', fontsize=13, color='white' if i == 2 else INK)
delta = values[2] - values[1]
fig.text(.09, .155, f'PRIMARY COMPARISON  {delta:.1f} percentage points: named peers minus repetition', fontsize=12, color=VIOLET, weight='bold')
footer(fig)
save(fig, 'confirmatory-accuracy', card=True)

fig = base('Which answers changed?', 'Paired outcomes: repetition control → named peers on the same 48 items')
ax = fig.add_axes([.12, .22, .49, .49]);ax.set_xlim(0,2);ax.set_ylim(0,2);ax.axis('off')
cells=[(0,1,pair['bothCorrect'],'Correct → correct', '#e1e7d9'),(1,1,pair['correctToWrong'],'Correct → wrong','#dcd5eb'),(0,0,pair['wrongToCorrect'],'Wrong → correct','#edf0e7'),(1,0,pair['bothWrong'],'Wrong → wrong','#e7e8e3')]
for x,y,count,label,color in cells:
    ax.add_patch(Rectangle((x+.015,y+.015),.97,.97,facecolor=color,edgecolor=LINE))
    ax.text(x+.5,y+.58,str(count),fontsize=40,ha='center',va='center',fontfamily='DejaVu Serif')
    ax.text(x+.5,y+.25,label,fontsize=11,ha='center')
fig.text(.66,.64,'20',fontsize=45,color=VIOLET,weight='bold')
fig.text(.66,.57,'correct-to-wrong switches',fontsize=11)
fig.text(.66,.45,'1',fontsize=45,color=SAGE,weight='bold')
fig.text(.66,.38,'wrong-to-correct switch',fontsize=11)
fig.text(.66,.27,f"Exact McNemar\np = {data['mcnemarP']:.10f}",fontsize=11,color=MUTED,linespacing=1.5)
fig.text(.12,.155,'Each item appears once. Counts total 48; registered exclusions: 0.',fontsize=11,color=MUTED)
footer(fig)
save(fig,'paired-answer-changes')
print('Rendered two research figures from the published report; no evaluations were run.')
