"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringExtensions = void 0;
class StringExtensions {
    static toKebabCase(value) {
        return value.replace(/ - /g, ' ').toLowerCase().split(' ').map(s => s.trim()).join('-');
    }
    static fromKebabCase(value) {
        return value.split('-').map(s => this.capitalize(s)).join(' ');
    }
    static capitalize(value) {
        value = value.toLowerCase();
        return value.split(' ').map(v => v[0].toUpperCase() + v.substring(1)).join(' ');
    }
    static formatTime(total) {
        if (isNaN(total))
            return '00:00:00';
        const seconds = Math.floor(total % 60), minutes = Math.floor(total / 60 % 60), hours = Math.floor(total / 60 / 60 % 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    static runtime(seconds) {
        const hours = seconds > 3600 ? `${Math.floor(seconds / 3600)} h` : '', minutes = `${Math.round(seconds % 3600 / 60)} m`;
        return seconds > 3600 ? `${hours} ${minutes}` : minutes;
    }
}
exports.StringExtensions = StringExtensions;
