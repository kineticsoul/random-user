import { DataForUI, RandomUser } from '@/types/types';
import axios from 'axios';
import userIcon from '@/assets/svg/user.svg'
import mapIcon from '@/assets/svg/map-location.svg'
import emailIcon from '@/assets/svg/email.svg'
import phoneIcon from '@/assets/svg/call.svg'
import calendarIcon from '@/assets/svg/calendar.svg'
import passwordIcon from '@/assets/svg/locked.svg'

import activeUserIcon from '@/assets/svg/user-active.svg'
import activeMapIcon from '@/assets/svg/map-location-active.svg'
import activeEmailIcon from '@/assets/svg/email-active.svg'
import activePhoneIcon from '@/assets/svg/call-active.svg'
import activeCalendarIcon from '@/assets/svg/calendar-active.svg'
import activePasswordIcon from '@/assets/svg/locked-active.svg'

export const getRandomUser = async () => {
    // Get a random user from the API
    const response = await axios.get('https://randomuser.me/api/')
    const userData: RandomUser = response?.data?.results[0]
    return userData
}

export const getActiveSection = (sections: DataForUI[], key: number): DataForUI => {
    return sections[key]
}


export const getDataForUI = (user: RandomUser): DataForUI[] => {

    // Creating data array for the UI
    const dataArray: DataForUI[] = [
        {
            label: 'Hi, My name is',
            value: user.name.first + ' ' + user.name.last,
            icon: userIcon,
            activeIcon: activeUserIcon,
            key: 'name',
            photo: user.picture.large,
            active: true
        },
        {
            label: 'My email address is',
            value: user.email,
            icon: emailIcon,
            activeIcon: activeEmailIcon,
            key: 'email',
            photo: user.picture.large
        },
        {
            label: 'My birthday is',
            value: new Date(user.dob.date).toLocaleDateString(),
            icon: calendarIcon,
            activeIcon: activeCalendarIcon,
            key: 'date',
            photo: user.picture.large
        },
        {
            label: 'My address is',
            value: user.location.street.number + ' ' + user.location.street.name,
            icon: mapIcon,
            activeIcon: activeMapIcon,
            key: 'address',
            photo: user.picture.large
        },
        {
            label: 'My phone number is',
            value: user.cell,
            icon: phoneIcon,
            activeIcon: activePhoneIcon,
            key: 'phone',
            photo: user.picture.large
        },
        {
            label: 'My password is',
            value: user.login.password,
            icon: passwordIcon,
            activeIcon: activePasswordIcon,
            key: 'password',
            photo: user.picture.large
        }
    ]
    return dataArray
}
