import React from 'react';

const ScheduleOption = ({ setTimeZone, setLanguageSelect }) => {
    const handleTimeZone = (e) => {
        setTimeZone(e.target.value)
    }
    const handleLanguageSelect = (e) => {
        setLanguageSelect(e.target.value)
    }
    return (
        <div>
            <div>
                <label htmlFor="timezone" className="absolute ml-6 bg-white text-sm font-medium">Time Zone</label>
                <div className='p-3'>
                    <select onChange={handleTimeZone} id="timezone" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="-12:00">(GMT -12:00) Eniwetok</option>
                        <option defaultValue="-12:00">(GMT -12:00) Kwajalein</option>
                        <option defaultValue="-11:00">(GMT -11:00) Midway</option>
                        <option defaultValue="-11:00">(GMT -11:00) Island</option>
                        <option defaultValue="-11:00">(GMT -11:00) Samoa</option>
                        <option defaultValue="-10:00">(GMT -10:00) Hawaii</option>
                        <option defaultValue="-09:50">(GMT -9:30) Taiohae</option>
                        <option defaultValue="-09:00">(GMT -9:00) Alaska</option>
                        <option defaultValue="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                        <option defaultValue="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                        <option defaultValue="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                        <option defaultValue="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                        <option defaultValue="-04:50">(GMT -4:30) Caracas</option>
                        <option defaultValue="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                        <option defaultValue="-03:50">(GMT -3:30) Newfoundland</option>
                        <option defaultValue="-03:00">(GMT -3:00) Brazil</option>
                        <option defaultValue="-03:00">(GMT -3:00) Buenos Aires</option>
                        <option defaultValue="-03:00">(GMT -3:00) Georgetown</option>
                        <option defaultValue="-02:00">(GMT -2:00) Mid-Atlantic</option>
                        <option defaultValue="-01:00">(GMT -1:00) Azores</option>
                        <option defaultValue="-01:00">(GMT -1:00) Cape Verde Islands</option>
                        <option defaultValue="+00:00">(GMT -0:00) Western Europe Time</option>
                        <option defaultValue="+00:00">(GMT -0:00) London</option>
                        <option defaultValue="+00:00">(GMT -0:00) Lisbon</option>
                        <option defaultValue="+00:00">(GMT -0:00) Casablanca</option>
                        <option defaultValue="+01:00">(GMT +1:00) Brussels</option>
                        <option defaultValue="+01:00">(GMT +1:00) Copenhagen</option>
                        <option defaultValue="+01:00">(GMT +1:00) Madrid</option>
                        <option defaultValue="+01:00">(GMT +1:00) Paris</option>
                        <option defaultValue="+02:00">(GMT +2:00) Kaliningrad</option>
                        <option defaultValue="+02:00">(GMT +2:00) South Africa</option>
                        <option defaultValue="+03:00">(GMT +3:00) Baghdad</option>
                        <option defaultValue="+03:00">(GMT +3:00) Riyadh</option>
                        <option defaultValue="+03:00">(GMT +3:00) Moscow</option>
                        <option defaultValue="+03:00">(GMT +3:00) St. Petersburg</option>
                        <option defaultValue="+03:50">(GMT +3:30) Tehran</option>
                        <option defaultValue="+04:00">(GMT +4:00) Abu Dhabi</option>
                        <option defaultValue="+04:00">(GMT +4:00) Muscat</option>
                        <option defaultValue="+04:00">(GMT +4:00) Baku</option>
                        <option defaultValue="+04:00">(GMT +4:00) Tbilisi</option>
                        <option defaultValue="+04:50">(GMT +4:30) Kabul</option>
                        <option defaultValue="+05:00">(GMT +5:00) Ekaterinburg</option>
                        <option defaultValue="+05:00">(GMT +5:00) Islamabad</option>
                        <option defaultValue="+05:00">(GMT +5:00) Karachi</option>
                        <option defaultValue="+05:00">(GMT +5:00) Tashkent</option>
                        <option defaultValue="+05:50">(GMT +5:30) Bombay</option>
                        <option defaultValue="+05:50">(GMT +5:30) Calcutta</option>
                        <option defaultValue="+05:50">(GMT +5:30) Madras</option>
                        <option defaultValue="+05:50">(GMT +5:30) New Delhi</option>
                        <option defaultValue="+05:75">(GMT +5:45) Kathmandu</option>
                        <option defaultValue="+05:75">(GMT +5:45) Pokhara</option>
                        <option defaultValue="+06:00">(GMT +6:00) Almaty</option>
                        <option defaultValue="+06:00" selected="selected">(GMT +6:00) Dhaka</option>
                        <option defaultValue="+06:00">(GMT +6:00) Colombo</option>
                        <option defaultValue="+06:50">(GMT +6:30) Yangon</option>
                        <option defaultValue="+06:50">(GMT +6:30) Mandalay</option>
                        <option defaultValue="+07:00">(GMT +7:00) Bangkok</option>
                        <option defaultValue="+07:00">(GMT +7:00) Hanoi</option>
                        <option defaultValue="+07:00">(GMT +7:00) Jakarta</option>
                        <option defaultValue="+08:00">(GMT +8:00) Beijing</option>
                        <option defaultValue="+08:00">(GMT +8:00) Perth</option>
                        <option defaultValue="+08:00">(GMT +8:00) Singapore</option>
                        <option defaultValue="+08:00">(GMT +8:00) Hong Kong</option>
                        <option defaultValue="+08:75">(GMT +8:45) Eucla</option>
                        <option defaultValue="+09:00">(GMT +9:00) Tokyo</option>
                        <option defaultValue="+09:00">(GMT +9:00) Seoul</option>
                        <option defaultValue="+09:00">(GMT +9:00) Osaka</option>
                        <option defaultValue="+09:00">(GMT +9:00) Sapporo</option>
                        <option defaultValue="+09:00">(GMT +9:00) Yakutsk</option>
                        <option defaultValue="+09:50">(GMT +9:30) Adelaide</option>
                        <option defaultValue="+09:50">(GMT +9:30) Darwin</option>
                        <option defaultValue="+10:00">(GMT +10:00) Eastern Australia</option>
                        <option defaultValue="+10:00">(GMT +10:00) Guam</option>
                        <option defaultValue="+10:00">(GMT +10:00) Vladivostok</option>
                        <option defaultValue="+10:50">(GMT +10:30) Lord Howe Island</option>
                        <option defaultValue="+11:00">(GMT +11:00) Magadan</option>
                        <option defaultValue="+11:00">(GMT +11:00) Solomon Islands</option>
                        <option defaultValue="+11:00">(GMT +11:00) New Caledonia</option>
                        <option defaultValue="+11:50">(GMT +11:30) Norfolk Island</option>
                        <option defaultValue="+12:00">(GMT +12:00) Auckland</option>
                        <option defaultValue="+12:00">(GMT +12:00) Wellington</option>
                        <option defaultValue="+12:00">(GMT +12:00) Fiji</option>
                        <option defaultValue="+12:00">(GMT +12:00) Kamchatka</option>
                        <option defaultValue="+12:75">(GMT +12:45) Chatham Islands</option>
                        <option defaultValue="+13:00">(GMT +13:00) Apia</option>
                        <option defaultValue="+13:00">(GMT +13:00) Nukualofa</option>
                        <option defaultValue="+14:00">(GMT +14:00) Line Islands</option>
                        <option defaultValue="+14:00">(GMT +14:00) Tokelau</option>
                    </select>
                </div>

            </div>
            <div>
                <label htmlFor="language" className="absolute ml-6 bg-white text-sm font-medium">Demo Language</label>
                <div className='p-3'>
                    <select onChange={handleLanguageSelect} id="language" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="English">English</option>
                        <option defaultValue="Spanish">Spanish</option>
                        <option defaultValue="Brazilian Portuguese">Brazilian Portuguese</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default ScheduleOption;