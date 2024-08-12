#!/bin/bash
############################ NOTE ############################
###                  php artisan serve                     ###
###          should be executed in other terminal          ###     
##############################################################
show_menu() {
    echo "Select an option (1-4):"
    echo "1) Local development"
    echo "2) Run iOS"
    echo "3) Run Android"
    echo "4) Exit"
}
handle_selection() {
    if [ "$1" != "4" ]; then 
        cd client
    fi
    case $1 in
        1)
            echo "Selected: Local development"
            ionic serve
            ;;
        2)
            echo "Selected: Run iOS"
            npx cap run ios
            ;;
        3)
            echo "Selected: Run Android"
            npx cap run android
            ;;
        4)
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Invalid option, please choose an option from 1 to 4."
            ;;
    esac
}
while true; do
    show_menu
    read -p "Write an option number: " user_choice
    handle_selection $user_choice
done
