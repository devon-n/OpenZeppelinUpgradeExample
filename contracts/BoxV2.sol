//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BoxV2 {
    uint private value;

    event ValueChanged(uint newValue);

    function store(uint newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint) {
        return value;
    }

    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}