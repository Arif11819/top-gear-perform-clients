import React from 'react';

const ScheduleOption = () => {
    return (
        <div>
            <div>
                <label for="timezone" className="absolute ml-6 bg-white text-sm font-medium">Time Zone</label>
                <div className='p-3'>
                    <select id="timezone" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="-12:00">(GMT -12:00) Eniwetok</option>
                        <option value="-12:00">(GMT -12:00) Kwajalein</option>
                        <option value="-11:00">(GMT -11:00) Midway</option>
                        <option value="-11:00">(GMT -11:00) Island</option>
                        <option value="-11:00">(GMT -11:00) Samoa</option>
                        <option value="-10:00">(GMT -10:00) Hawaii</option>
                        <option value="-09:50">(GMT -9:30) Taiohae</option>
                        <option value="-09:00">(GMT -9:00) Alaska</option>
                        <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                        <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                        <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                        <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                        <option value="-04:50">(GMT -4:30) Caracas</option>
                        <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                        <option value="-03:50">(GMT -3:30) Newfoundland</option>
                        <option value="-03:00">(GMT -3:00) Brazil</option>
                        <option value="-03:00">(GMT -3:00) Buenos Aires</option>
                        <option value="-03:00">(GMT -3:00) Georgetown</option>
                        <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                        <option value="-01:00">(GMT -1:00) Azores</option>
                        <option value="-01:00">(GMT -1:00) Cape Verde Islands</option>
                        <option value="+00:00">(GMT -0:00) Western Europe Time</option>
                        <option value="+00:00">(GMT -0:00) London</option>
                        <option value="+00:00">(GMT -0:00) Lisbon</option>
                        <option value="+00:00">(GMT -0:00) Casablanca</option>
                        <option value="+01:00">(GMT +1:00) Brussels</option>
                        <option value="+01:00">(GMT +1:00) Copenhagen</option>
                        <option value="+01:00">(GMT +1:00) Madrid</option>
                        <option value="+01:00">(GMT +1:00) Paris</option>
                        <option value="+02:00">(GMT +2:00) Kaliningrad</option>
                        <option value="+02:00">(GMT +2:00) South Africa</option>
                        <option value="+03:00">(GMT +3:00) Baghdad</option>
                        <option value="+03:00">(GMT +3:00) Riyadh</option>
                        <option value="+03:00">(GMT +3:00) Moscow</option>
                        <option value="+03:00">(GMT +3:00) St. Petersburg</option>
                        <option value="+03:50">(GMT +3:30) Tehran</option>
                        <option value="+04:00">(GMT +4:00) Abu Dhabi</option>
                        <option value="+04:00">(GMT +4:00) Muscat</option>
                        <option value="+04:00">(GMT +4:00) Baku</option>
                        <option value="+04:00">(GMT +4:00) Tbilisi</option>
                        <option value="+04:50">(GMT +4:30) Kabul</option>
                        <option value="+05:00">(GMT +5:00) Ekaterinburg</option>
                        <option value="+05:00">(GMT +5:00) Islamabad</option>
                        <option value="+05:00">(GMT +5:00) Karachi</option>
                        <option value="+05:00">(GMT +5:00) Tashkent</option>
                        <option value="+05:50">(GMT +5:30) Bombay</option>
                        <option value="+05:50">(GMT +5:30) Calcutta</option>
                        <option value="+05:50">(GMT +5:30) Madras</option>
                        <option value="+05:50">(GMT +5:30) New Delhi</option>
                        <option value="+05:75">(GMT +5:45) Kathmandu</option>
                        <option value="+05:75">(GMT +5:45) Pokhara</option>
                        <option value="+06:00">(GMT +6:00) Almaty</option>
                        <option value="+06:00" selected="selected">(GMT +6:00) Dhaka</option>
                        <option value="+06:00">(GMT +6:00) Colombo</option>
                        <option value="+06:50">(GMT +6:30) Yangon</option>
                        <option value="+06:50">(GMT +6:30) Mandalay</option>
                        <option value="+07:00">(GMT +7:00) Bangkok</option>
                        <option value="+07:00">(GMT +7:00) Hanoi</option>
                        <option value="+07:00">(GMT +7:00) Jakarta</option>
                        <option value="+08:00">(GMT +8:00) Beijing</option>
                        <option value="+08:00">(GMT +8:00) Perth</option>
                        <option value="+08:00">(GMT +8:00) Singapore</option>
                        <option value="+08:00">(GMT +8:00) Hong Kong</option>
                        <option value="+08:75">(GMT +8:45) Eucla</option>
                        <option value="+09:00">(GMT +9:00) Tokyo</option>
                        <option value="+09:00">(GMT +9:00) Seoul</option>
                        <option value="+09:00">(GMT +9:00) Osaka</option>
                        <option value="+09:00">(GMT +9:00) Sapporo</option>
                        <option value="+09:00">(GMT +9:00) Yakutsk</option>
                        <option value="+09:50">(GMT +9:30) Adelaide</option>
                        <option value="+09:50">(GMT +9:30) Darwin</option>
                        <option value="+10:00">(GMT +10:00) Eastern Australia</option>
                        <option value="+10:00">(GMT +10:00) Guam</option>
                        <option value="+10:00">(GMT +10:00) Vladivostok</option>
                        <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                        <option value="+11:00">(GMT +11:00) Magadan</option>
                        <option value="+11:00">(GMT +11:00) Solomon Islands</option>
                        <option value="+11:00">(GMT +11:00) New Caledonia</option>
                        <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                        <option value="+12:00">(GMT +12:00) Auckland</option>
                        <option value="+12:00">(GMT +12:00) Wellington</option>
                        <option value="+12:00">(GMT +12:00) Fiji</option>
                        <option value="+12:00">(GMT +12:00) Kamchatka</option>
                        <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                        <option value="+13:00">(GMT +13:00) Apia</option>
                        <option value="+13:00">(GMT +13:00) Nukualofa</option>
                        <option value="+14:00">(GMT +14:00) Line Islands</option>
                        <option value="+14:00">(GMT +14:00) Tokelau</option>
                    </select>
                </div>

            </div>
            <div>
                <label for="language" className="absolute ml-6 bg-white text-sm font-medium">Demo Language</label>
                <div className='p-3'>
                    <select id="language" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Brazilian Portuguese">Brazilian Portuguese</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default ScheduleOption;