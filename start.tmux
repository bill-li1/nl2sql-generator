#!/bin/bash

SESSION_NAME="nl2sql"
PROJECT_DIR=~/Projects/natural-language-sql/nl2sql-generator/

# Start a new tmux session
tmux new-session -d -s $SESSION_NAME -c $PROJECT_DIR

# Tab 1 (Editor): Text editing with two vertically split panes
tmux rename-window -t $SESSION_NAME:1 "vim"
tmux split-window -h -t $SESSION_NAME:1.1 -c $PROJECT_DIR
tmux resize-pane -t $SESSION_NAME:1.1 -x 10

# Left pane: Run neofetch
tmux send-keys -t $SESSION_NAME:1.1 "neofetch" C-m

# Right pane: Start nvim
tmux send-keys -t $SESSION_NAME:1.2 "cd $PROJECT_DIR && nvim" C-m

# Tab 2 (Dev Server)
tmux new-window -t $SESSION_NAME:2 -n "server" -c $PROJECT_DIR
tmux send-keys -t $SESSION_NAME:2 "cd $PROJECT_DIR && npm run dev" C-m

# Tab 3 (Extra)
tmux new-window -t $SESSION_NAME:3 -c $PROJECT_DIR

# Switch to the first tab
tmux select-window -t $SESSION_NAME:1

# Attach to the session
tmux attach-session -t $SESSION_NAME
