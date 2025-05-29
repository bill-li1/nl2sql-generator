#!/bin/bash

SESSION_NAME="nl2sql"
PROJECT_DIR=~/Projects/natural-language-sql/nl2sql-generator/

tmux new-session -d -s $SESSION_NAME -c $PROJECT_DIR

tmux rename-window -t $SESSION_NAME:1 "vim"

tmux split-window -h -t $SESSION_NAME:1.1 -c $PROJECT_DIR

tmux resize-pane -t $SESSION_NAME:1.1 -x 10

tmux send-keys -t $SESSION_NAME:1.1 "neofetch" C-m

tmux send-keys -t $SESSION_NAME:1.2 "cd $PROJECT_DIR && nvim" C-m

tmux new-window -t $SESSION_NAME:2 -n "server" -c $PROJECT_DIR

tmux send-keys -t $SESSION_NAME:2 "cd $PROJECT_DIR && npm run dev" C-m

tmux new-window -t $SESSION_NAME:3 -c $PROJECT_DIR

tmux select-window -t $SESSION_NAME:1

tmux attach-session -t $SESSION_NAME
